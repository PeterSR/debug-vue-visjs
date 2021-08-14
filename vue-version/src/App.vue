<template>
  <div id="app">
    <div id="timeline"></div>
  </div>
</template>

<script>

import { Timeline } from "vis-timeline/standalone";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {

    this.$nextTick(() => {
      const el = document.getElementById("timeline")

      const items = [
          {
              id: 0,
              content: "Test",
              start: "2021-06-01"
          }
      ]
      const options = {}
      const timeline = new Timeline(el, items, options)
      console.log(timeline)
    })

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
