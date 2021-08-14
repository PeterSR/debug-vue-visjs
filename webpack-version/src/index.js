import { Timeline } from "vis-timeline/standalone"

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