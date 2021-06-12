<template>
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="primary">
      <ion-button @click="randomSlide(500)">
        <ion-icon slot="icon-only" :icon="refresh"></ion-icon>
      </ion-button>

      <ion-button @click="$refs.sizeOptionList.$el.open()">
        <ion-icon slot="icon-only" :icon="expand"></ion-icon>
        <ion-datetime ref="sizeOptionList" @ionChange="changeSizeUsingDate" display-format="YY" :value="1900+puzzleSize" min="1903" max="1910" style="display: none;"> </ion-datetime>
      </ion-button>

      <ion-button @click="$refs.inputfile.click()">
        <ion-icon slot="icon-only" :icon="folderOpenOutline"></ion-icon>
        <input ref="inputfile" type="file" accept="video/*,image/*" name="image" id="file" @change="loadFile" />
      </ion-button>
    </ion-buttons>

    <ion-title mode=ios>{{timerTime}}</ion-title>
  </ion-toolbar>
</ion-header>



<ion-content>
  <img v-if="isImage" class="sourceImg" ref="sourceImg" :src="src" @load="onMediaLoad">
  <video v-else class="sourceImg" ref="sourceImg" autoplay="autoplay" loop="loop" playsinline="" :src="src" width="500" height="500" @play="onMediaLoad">
  </video>
  <div id="layout">
    <transition-group name="slide" class="puzzleContainer" tag="span" :style="{'width': containerSize + 'px'}">
      <div v-for="tile in tiles" class="tile" :key="tile.index" :style="{
                  width: `${tileWidthPercent}%`,
                  height: `${tileHeightPercent}%`,
                  opacity: tile.position === openPos ? 0 : 1
                  }">
        <canvas :ref="el => { if (el) tileCanvasList[tile.index]=el }" class="tile_canvas" @click="move(tile.position)" :width="tileWidth" :height="tileHeight">
        </canvas>
      </div>
    </transition-group>


    <canvas class="background" ref="background"> </canvas>


  </div>
</ion-content>
</template>
<script>
import range from 'python-range';
import {
  refresh,
  expand,
  folderOpenOutline
} from 'ionicons/icons';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonDatetime,
} from '@ionic/vue';


//tile video size


import shuffle from 'shuffle-array';

export default {
  name: 'SlidePuzzleContainer',
  props: {
    name: String,
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonDatetime,
  },
  setup() {
    return {
      refresh,
      expand,
      folderOpenOutline
    }
  },
  data() {
    return {
      //puzzle size
      tiles: [],
      puzzleSize: 4,
      cols: 4,
      rows: 4,
      openPos: null,
      contextList: [],

      //image size
      containerSize: 500,
      imageMinSize: 0,
      imageStartX: 0,
      imageStartY: 0,

      //tile canvas----------
      tileCanvasList: {},
      image: null,
      blob: null,
      src: "../assets/img/Bokeh - 55859.mp4",
      lastRender: -1,
      canvasRAFID: null,
      bufferCanvas: null,
      bufferCanvasContext:null,
      backgroundCanvas:null,
      backgroundCtx:null,

      //timer--------
      timerTime: "00:00:00",
      timerRAFID: null,
      startTime: 0,
      runTime: 0,



    }
  },
  computed: {
    tileWidthPercent() {
      return 100 / this.cols;
    },
    tileHeightPercent() {
      return 100 / this.rows;
    },
    imageTileWidth() {
      return Math.floor(this.imageMinSize / this.cols);
    },
    imageTileHeight() {
      return Math.floor(this.imageMinSize / this.rows);
    },
    tileWidth() {
      return Math.floor(this.imageMinSize / this.cols);
    },
    tileHeight() {
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
  },



  //action =====================================================================
  beforeMount() {
    this.getRandomImg();
    this.setTile();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    //set bufferCanvas
    if(!this.bufferCanvas){
      this.bufferCanvas = document.createElement("canvas");
      this.bufferCanvasContext = this.bufferCanvas.getContext("2d", { alpha: false });
      this.bufferCanvasContext.imageSmoothingEnabled= false;
    }
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    this.terminateVideo();
  },


  methods: {
    getRandomImg() {
      const fileList = [
        "Bokeh - 55859.mp4",
        "Mountain - 65953.mp4",
        "Waves - 61950.mp4",
      ];
      this.src = "../assets/img/" + shuffle.pick(fileList); //get random item
    },
    //puzzle init===========================================================================
    setTile() {
      this.tiles = Array.from(range(this.cols * this.rows)).map((el, index) => {
        return {
          index: index,
          position: index
        };
      });
      this.openPos = this.cols * this.rows - 1;


      this.stopTimer();
      this.resetTimer();
    },

    //puzzle image load===========================================================================
    onMediaLoad() {
      this.$nextTick(() => {
        this.terminateVideo();
        this.image = this.$refs.sourceImg;

        if (this.isImage) {
          this.onImgLoad();
        } else {
          this.onVideoLoad();
        }
      });
    },
    onVideoLoad() {
      this.initCanvas(this.image.videoWidth, this.image.videoHeight);
      const loop = () => {
        this.imageToCanvas();
        this.canvasRAFID =requestAnimationFrame(loop);
      };
      this.canvasRAFID =requestAnimationFrame(loop);
    },
    terminateVideo() {
      cancelAnimationFrame(this.canvasRAFID);
    },
    onImgLoad() {
      this.initCanvas(this.image.naturalWidth, this.image.naturalHeight);
      this.imageToCanvas();
    },
    imageToCanvas() {
      //imageToBuffer
      this.bufferCanvasContext.drawImage(this.image,0,0);
      //bufferToTile
      this.contextList.forEach((context, index) => {
        context.drawImage(
          this.bufferCanvas,
          this.imageStartX + this.getBackgroundPositionList[index].x,
          this.imageStartY + this.getBackgroundPositionList[index].y,
          this.imageTileWidth,
          this.imageTileHeight,
          0,
          0,
          this.tileWidth,
          this.tileHeight,
        )
      });
      //bufferToBackground
      this.backgroundCtx.drawImage(this.bufferCanvas, 0, 0, this.imageWidth, this.imageHeight, 0, 0, 100, 100);
    },
    initCanvas(imageWidth, imageHeight) {
      //calculate center start pos for tile
      this.imageWidth = imageWidth;
      this.imageHeight = imageHeight;
      this.imageMinSize = Math.min(this.imageWidth, this.imageHeight);
      this.imageStartX = Math.floor((this.imageWidth - this.imageMinSize) / 2);
      this.imageStartY = Math.floor((this.imageHeight - this.imageMinSize) / 2);

      //set buffer width height
      this.bufferCanvas.width = this.imageWidth;
      this.bufferCanvas.height = this.imageHeight;
      //get tile context list and get tile position list
      this.contextList= [];
      this.getBackgroundPositionList=[];
      Object.entries(this.tileCanvasList).forEach(([index, canvas]) => {
        const con =canvas.getContext("2d", { alpha: false })
        con.imageSmoothingEnabled= false;
        this.contextList.push(con);

        this.getBackgroundPositionList.push(this.getBackgroundPosition(index));
      });
      //background size
      if(!this.backgroundCanvas ){
        this.backgroundCanvas = this.$refs.background;
        this.backgroundCanvas.width = 100;
        this.backgroundCanvas.height = 100;
        this.backgroundCtx = this.backgroundCanvas.getContext("2d", { alpha: false });
        this.backgroundCtx.filter = 'blur(3px) brightness(0.5)';
      }
    },
    posToCoor(index) {
      return {
        x: index % this.cols,
        y: Math.floor(index / this.cols)
      };
    },
    getBackgroundPosition(index) {
      const coords = this.posToCoor(index);
      return {
        x: coords.x * this.imageTileWidth,
        y: coords.y * this.imageTileHeight
      };
    },


    //puzzle move===========================================================================
    move(position) {
      const isSameRow = this.posToCoor(position).y == this.posToCoor(this.openPos).y;
      const isSameCol = this.posToCoor(position).x == this.posToCoor(this.openPos).x;

      if (isSameRow || isSameCol) {
        let inc = this.openPos < position ? 1 : -1;
        inc = isSameRow ? inc : inc * this.cols;

        //for each between openPos and selectedPos
        //swap in script array var
        //swap in screen
        range(this.openPos, position, inc).forEach((i) => {
          [this.tiles[i].position, this.tiles[i + inc].position] = [this.tiles[i + inc].position, this.tiles[i].position];
          [this.tiles[i], this.tiles[i + inc]] = [this.tiles[i + inc], this.tiles[i]];
        });

        //make blank space on selected position
        this.openPos = position;

        //check puzzle solved
        if (this.checkSolved() == true) {
          this.stopTimer();
        }
      }
    },
    checkSolved() {
      for (const value of this.tiles) {
        if (value.index != value.position) {
          return false;
        }
      }
      return true;
    },
    randomSlide(iterations) {
      let possibleShuffleList;
      //shuffle row ones and cols ones, repeat
      range(iterations).forEach((i) => {
        if (i % 2 == 0) { //possible row shuffle list
          possibleShuffleList = Array.from(range(
            this.openPos % this.cols,
            this.cols * this.rows,
            this.cols
          ));
        } else { //possible width shuffle list
          possibleShuffleList = Array.from(range(
            this.posToCoor(this.openPos).y * this.cols,
            (this.posToCoor(this.openPos).y + 1) * this.cols));
        }

        //move random pos
        possibleShuffleList = possibleShuffleList.filter((e, i) => i !== this.openPos)
        const randomPos = shuffle.pick(possibleShuffleList);
        this.move(randomPos);
      });
      this.restartTimer();
    },


    //input handle============================================================================================
    changeSizeUsingDate(event) {
      const size = new Date(event.detail.value).getYear();
      this.puzzleSize = size;
      this.cols = this.puzzleSize;
      this.rows = this.puzzleSize;
      this.setTile();
      this.onMediaLoad();
    },
    handleResize() {
      const minSize = Math.min(window.innerWidth, window.innerHeight - 56); //toolbar_size=56
      this.containerSize = minSize;
    },
    loadFile(event) {
      this.setTile();
      if (this.blob) {
        URL.revokeObjectURL(this.blob);
      }
      this.blob = event.target.files[0];
      this.src = URL.createObjectURL(this.blob);
    },


    //timer=============================================================
    restartTimer(){
      function padded(value) {
        return String(value).padStart(2, "0");
      }

      this.startTime = performance.now();

      if(!this.timerRAFID){
        const loop = () => {
          this.runTime = performance.now() - this.startTime;
          const remain = Math.floor(this.runTime / 10) % 100;
          const sec = Math.floor(this.runTime / 1000) % 60;
          const min = Math.floor(this.runTime / 1000 / 60);
          this.timerTime = padded(min) + ":" + padded(sec) + ":" + padded(remain);

          this.timerRAFID = requestAnimationFrame(loop);
        };
        this.$nextTick(loop);
      }
    },
    stopTimer() {
      cancelAnimationFrame(this.timerRAFID);
      this.timerRAFID=null;
    },
    resetTimer(){
      this.timerTime="00:00:00";
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#layout {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow:hidden;
}

.puzzleContainer {
  display: flex;
  flex-wrap: wrap;
  margin: -1px;
  background: white;
  border: 1px solid white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, .5);
}

.tile {
  display: inline-block;
  padding: 1px;
  box-sizing: border-box;
}

.tile .tile_canvas {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  font-size: 2rem;
  color: white;
  filter: brightness(1.00);
  transition: filter 200ms;
  cursor: pointer;
}

.tile .tile_canvas:hover {
  filter: brightness(0.80);
}

.controls {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide-move {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);  /* transition: all .04s ease; */
}

/* background ================== */
.sourceImg {
  display: none;
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

/* header ================== */
input[type="file"] {
  display: none;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
