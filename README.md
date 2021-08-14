# debug-vue-visjs

The placement of items and zooming seems to be broken in vis.js Timeline when using Vue.

See a demonstration here: 

https://user-images.githubusercontent.com/222286/129437542-80c78f8c-d7c5-41f6-a68e-e7db14116e52.mp4

This repo contains two web apps:
One is created as a Vue app (created with `vue create <app>`) and another as a pure Webpack app (created with `npx webpack init`).

Each aim to use `vis-timeline` is the same way:
Show one item "Test" placed at `2021-06-01`.

To ensure that reactivity of Vue does not mess with the `Timeline` object, the Vue version does not store anything in `data` or similar. Everything happens in `$nextTick`.

A third version using `vue-visjs` is outlined [here](https://github.com/sjmallon/vue-visjs/issues/17) and has the same issue as the Vue version in this repo.


## Usage

In each of the folders, run

```
npm install
npm run serve
```
