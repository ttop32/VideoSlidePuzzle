<template>
  <div id="container">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button @click="randomSlide(500)">
            <ion-icon slot="icon-only" :icon="refresh"></ion-icon>
          </ion-button>

          <ion-button @click="changeSize">
            <ion-icon slot="icon-only" :icon="expand"></ion-icon>
          </ion-button>

          <ion-button @click="$refs.inputfile.click()">
            <ion-icon slot="icon-only" :icon="folderOpenOutline"></ion-icon>
            <input
              ref="inputfile"
              type="file"
              accept="video/*,image/*"
              name="image"
              id="file"
              @change="loadFile"
            />
          </ion-button>
        </ion-buttons>

        <ion-title mode="ios">
          <StopwatchContainer ref="stopwatchRef"></StopwatchContainer>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <img
        v-if="isImage"
        class="sourceImg"
        ref="sourceImg"
        :src="src"
        @load="onMediaLoad"
      />
      <video
        v-else
        class="sourceImg"
        ref="sourceImg"
        autoplay="autoplay"
        loop="loop"
        playsinline=""
        :src="src"
        @play="onMediaLoad"
        crossorigin="anonymous"
        preload
        :muted="muted"
      ></video>

      <div class="boardContainerFull">
        <div class="boardContainerBox">
          <canvas
            ref="boardCanvas"
            class="tile_canvas"
            v-touch:tap="touchHandler"
            v-touch:swipe="swipeHandler"
            :width="canvasWidth"
            :height="canvasWidth"
            :style="{
              width: boardSize + 'px',
              margin: '-' + tilePadding + 'px',
              border: tilePadding + 'px solid white',
            }"
          ></canvas>
        </div>
      </div>
      <canvas class="background" ref="background"> </canvas>
    </ion-content>
  </div>
</template>
<script>
import { refresh, expand, folderOpenOutline } from "ionicons/icons";
import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  pickerController,
} from "@ionic/vue";
import range from "python-range";
import shuffle from "shuffle-array";
import TWEEN from "@tweenjs/tween.js";
import * as deepcopy from "deepcopy";

import StopwatchContainer from "@/components/StopwatchComponent.vue";

export default {
  name: "SlidePuzzleContainer",
  props: {
    name: String,
  },
  components: {
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    StopwatchContainer,
  },
  setup() {
    return {
      refresh,
      expand,
      folderOpenOutline,
    };
  },
  data() {
    return {
      //puzzle size
      tiles: [],
      puzzleSize: 4,
      cols: 4,
      rows: 4,
      openPos: null,
      sourcePosList: [],
      targetPosList: [],
      animatePosList: [],

      //image size
      boardSize: 500,
      imageMinSize: 0,
      imageStartX: 0,
      imageStartY: 0,
      tilePadding: 3,

      //tile canvas----------
      image: null,
      blob: null,
      src: "https://ttop32.github.io/VideoSlidePuzzle/public/assets/img/Bokeh%20-%2055859.mp4",
      lastRender: -1,
      bufferCanvas: null,
      bufferCanvasCtx: null,
      backgroundCanvas: null,
      backgroundCtx: null,

      rafId: null,
      isLoaded: false,
      muted: true, //video is muted because chrome video autoplay policy does not allow autoplay unless muted
      useSlideAnimation: true,
    };
  },
  computed: {
    imageTileWidth() {
      return Math.floor(this.imageMinSize / this.cols);
    },
    imageTileHeight() {
      return Math.floor(this.imageMinSize / this.rows);
    },
    isImage() {
      if (this.blob != null) {
        if (/^image/.test(this.blob.type)) {
          return true;
        } else if (/^video/.test(this.blob.type)) {
          return false;
        }
      }
      return /\.(jpe?g|png|webm|gif)$/i.test(this.src);
    },
    canvasWidth() {
      return (
        this.imageTileWidth * this.puzzleSize +
        this.tilePadding * (this.puzzleSize - 1)
      );
    },
    canvasHeight() {
      return (
        this.imageTileHeight * this.puzzleSize +
        this.tilePadding * (this.puzzleSize - 1)
      );
    },
  },
  watch: {
    tiles: {
      handler() {
        if (this.isLoaded) {
          this.setSlideAnimationTween();

          if (this.checkSolved() == true) {
            this.$refs.stopwatchRef.stopTimer();
          }
        }
      },
      deep: true,
    },
  },

  //action =====================================================================
  beforeMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.getRandomImg();
    this.startBoardFrameLoop();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  },

  methods: {
    startBoardFrameLoop() {
      const loop = () => {
        if (this.isLoaded) {
          this.updateAnimationPosition();
          this.updateMediaBuffer();
          this.updateTileAnimation();
          this.updateBackgroundAnimation();
        }
        this.rafId = requestAnimationFrame(loop);
      };
      this.$nextTick(loop);
    },
    updateAnimationPosition() {
      TWEEN.update();
    },
    updateMediaBuffer() {
      this.bufferCanvasCtx.drawImage(this.image, 0, 0);
    },
    updateTileAnimation() {
      this.boardContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.tiles.forEach((item, i) => {
        if (this.openPos == i) {
          return;
        }
        this.boardContext.drawImage(
          this.bufferCanvas,
          this.imageStartX + this.sourcePosList[item].x,
          this.imageStartY + this.sourcePosList[item].y,
          this.imageTileWidth,
          this.imageTileHeight,
          this.animatePosList[item].x,
          this.animatePosList[item].y,
          this.imageTileWidth,
          this.imageTileHeight
        );
      });
    },
    updateBackgroundAnimation() {
      this.backgroundCtx.drawImage(
        this.bufferCanvas,
        0,
        0,
        this.imageWidth,
        this.imageHeight,
        0,
        0,
        100,
        100
      );
    },

    setSlideAnimationTween() {
      this.tiles.forEach((item, i) => {
        if (this.useSlideAnimation) {
          new TWEEN.Tween(this.animatePosList[item])
            .to(this.targetPosList[i], 800)
            .easing(TWEEN.Easing.Elastic.Out)
            .start();
        } else {
          this.animatePosList[item] = this.targetPosList[i];
        }
      });
    },

    //puzzle image load===========================================================================
    getRandomImg() {
      const fileList = [
        "Bokeh - 55859.mp4",
        "Mountain - 65953.mp4",
        "Waves - 61950.mp4",
      ];
      this.src = "../assets/img/" + shuffle.pick(fileList); //get random item
      // const fileList = [
      //   "https://ttop32.github.io/VideoSlidePuzzle/public/assets/img/Bokeh%20-%2055859.mp4",
      //   "https://ttop32.github.io/VideoSlidePuzzle/public/assets/img/Mountain%20-%2065953.mp4",
      //   "https://ttop32.github.io/VideoSlidePuzzle/public/assets/img/Waves%20-%2061950.mp4",
      // ];
      // this.src = shuffle.pick(fileList); //get random item
    },

    onMediaLoad() {
      this.$nextTick(() => {
        this.image = this.$refs.sourceImg;
        this.resetTile();
      });
    },
    resetTile() {
      this.isLoaded = false;
      this.setTile();
      this.initCanvas();
      this.$refs.stopwatchRef.resetTimer();
      this.isLoaded = true;
    },
    initCanvas() {
      //set background canvas
      if (!this.backgroundCanvas) {
        this.backgroundCanvas = this.$refs.background;
        this.backgroundCanvas.width = 100;
        this.backgroundCanvas.height = 100;
        this.backgroundCtx = this.initContext(this.backgroundCanvas);
        this.backgroundCtx.filter = "blur(3px) brightness(0.5)";
      }
      //set bufferCanvas
      if (!this.bufferCanvas) {
        this.bufferCanvas = document.createElement("canvas");
        this.bufferCanvasCtx = this.initContext(this.bufferCanvas);
      }

      //calculate center start pos for tile
      this.imageWidth = this.isImage
        ? this.image.naturalWidth
        : this.image.videoWidth;
      this.imageHeight = this.isImage
        ? this.image.naturalHeight
        : this.image.videoHeight;
      this.imageMinSize = Math.min(this.imageWidth, this.imageHeight);
      this.imageStartX = Math.floor((this.imageWidth - this.imageMinSize) / 2);
      this.imageStartY = Math.floor((this.imageHeight - this.imageMinSize) / 2);
      this.bufferCanvas.width = this.imageWidth;
      this.bufferCanvas.height = this.imageHeight;

      // main board
      this.boardCanvas = this.$refs.boardCanvas;
      this.boardContext = this.initContext(this.boardCanvas);
      this.sourcePosList = [];
      this.targetPosList = [];
      this.tiles.forEach((element, index) => {
        var coords = this.indexToCoor(index);
        var pos = {
          x: coords.x * this.imageTileWidth,
          y: coords.y * this.imageTileHeight,
        };
        var posWithPadding = {
          x: pos.x + coords.x * this.tilePadding,
          y: pos.y + coords.y * this.tilePadding,
        };
        this.sourcePosList.push(pos);
        this.targetPosList.push(posWithPadding);
      });
      this.animatePosList = deepcopy(this.targetPosList);
    },
    initContext(canvasItem) {
      const ctx = canvasItem.getContext("2d", {
        alpha: false,
      });
      ctx.imageSmoothingEnabled = false;
      return ctx;
    },

    indexToCoor(index) {
      return {
        x: index % this.cols,
        y: Math.floor(index / this.cols),
      };
    },
    //puzzle move===========================================================================
    setTile() {
      this.tiles = Array.from(range(this.cols * this.rows));
      this.openPos = this.cols * this.rows - 1;
    },

    move(position) {
      const isSameRow =
        this.indexToCoor(position).y == this.indexToCoor(this.openPos).y;
      const isSameCol =
        this.indexToCoor(position).x == this.indexToCoor(this.openPos).x;

      if (
        (isSameRow || isSameCol) &&
        0 <= position &&
        position < this.tiles.length
      ) {
        let inc = this.openPos < position ? 1 : -1;
        inc = isSameRow ? inc : inc * this.cols;

        //for each between openPos and selectedPos
        //swap
        range(this.openPos, position, inc).forEach((i) => {
          [this.tiles[i], this.tiles[i + inc]] = [
            this.tiles[i + inc],
            this.tiles[i],
          ];
        });

        //make blank space on selected position
        this.openPos = position;
      }
    },
    randomSlide(iterations) {
      let possibleShuffleList;
      //shuffle row ones and cols ones, repeat
      range(iterations).forEach((i) => {
        if (i % 2 == 0) {
          //possible row shuffle list
          possibleShuffleList = Array.from(
            range(this.openPos % this.cols, this.cols * this.rows, this.cols)
          );
        } else {
          //possible width shuffle list
          possibleShuffleList = Array.from(
            range(
              this.indexToCoor(this.openPos).y * this.cols,
              (this.indexToCoor(this.openPos).y + 1) * this.cols
            )
          );
        }

        //move random pos
        possibleShuffleList = possibleShuffleList.filter(
          (e, i) => i !== this.openPos
        );
        const randomPos = shuffle.pick(possibleShuffleList);
        this.move(randomPos);
      });
      this.$refs.stopwatchRef.restartTimer();
    },
    checkSolved() {
      for (const [i, value] of this.tiles.entries()) {
        if (i != value) {
          return false;
        }
      }
      return true;
    },

    //input handle============================================================================================
    swipeHandler(direction) {
      if (direction == "left") {
        this.move(this.openPos + 1);
      } else if (direction == "right") {
        this.move(this.openPos - 1);
      } else if (direction == "top") {
        this.move(this.openPos + 1 * this.puzzleSize);
      } else if (direction == "bottom") {
        this.move(this.openPos - 1 * this.puzzleSize);
      }
    },
    touchHandler(event) {
      var x, y, target;
      if (event.changedTouches) {
        const touch = event.changedTouches[0];
        const rect = touch.target.getBoundingClientRect();

        x = touch.clientX - rect.left;
        y = touch.clientY - rect.top;
        target = touch.target;
      } else {
        x = event.offsetX;
        y = event.offsetY;
        target = event.target;
      }

      x = x / target.offsetWidth;
      y = y / target.offsetHeight;

      const col = Math.floor(x * this.puzzleSize);
      const row = Math.floor(y * this.puzzleSize);
      const idx = row * this.cols + col;
      this.move(idx);
    },

    async changeSize() {
      var options = {
        name: "size",
        options: Array.from(range(3, 10)).map((value) => {
          return {
            text: value,
            value: value,
          };
        }),
      };

      const picker = await pickerController.create({
        columns: [options],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Confirm",
            handler: (selected) => {
              var size = parseInt(selected.size.value);
              this.puzzleSize = size;
              this.cols = size;
              this.rows = size;
              this.resetTile();
            },
          },
        ],
      });
      await picker.present();
    },
    handleResize() {
      this.boardSize = Math.min(window.innerWidth, window.innerHeight - 56); //toolbar_size=56
    },
    loadFile(event) {
      this.muted = false;
      if (this.blob) {
        URL.revokeObjectURL(this.blob);
      }
      this.blob = event.target.files[0];
      this.src = URL.createObjectURL(this.blob);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  width: 100%;
  height: 100%;
}

.boardContainerFull {
  margin: -26px 0 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}

.boardContainerBox {
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
}

.boardCanvas {
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
}

.sourceImg {
  position: absolute;
  visibility: hidden;
}

.background {
  pointer-events: none;
  z-index: -1;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
}

/* hide file upload button */
input[type="file"] {
  display: none;
}
</style>
