<template>
  <div id="container">
    <strong>{{ timerTime }}</strong>
  </div>
</template>

<script>
export default {
  name: "StopwatchContainer",
  props: {
  },
  data() {
    return {
      timerTime: "00:00:00",
      timerRAFID: null,
      startTime: 0,
      runTime: 0,
    };
  },
  unmounted() {
    if (this.timerRAFID) {
      cancelAnimationFrame(this.timerRAFID)
    }
  },
  methods: {
    restartTimer() {
      function padded(value) {
        return String(value).padStart(2, "0");
      }

      this.startTime = performance.now();

      if (!this.timerRAFID) {
        const loop = () => {
          this.runTime = performance.now() - this.startTime;
          const remain = Math.floor(this.runTime / 10) % 100;
          const sec = Math.floor(this.runTime / 1000) % 60;
          const min = Math.floor(this.runTime / 1000 / 60);
          this.timerTime =
            padded(min) + ":" + padded(sec) + ":" + padded(remain);

          this.timerRAFID = requestAnimationFrame(loop);
        };
        this.$nextTick(loop);
      }
    },
    stopTimer() {
      cancelAnimationFrame(this.timerRAFID);
      this.timerRAFID = null;
    },
    resetTimer() {
      this.stopTimer();
      this.timerTime = "00:00:00";
    },
  },
};
</script>

<style scoped>
#container {
  text-align: center;
}
</style>
