"use strict"

import { Timer } from "./timer.js";
import { settings } from "./settings.js";

import { formatTime } from "./renderTime.js";

import { pauseBtnElements, resetBtnElements, startBtnElements, display } from "./elements.js";

const timer = new Timer(settings.workTime, settings.breakTime, () => {
    display.textContent = formatTime(timer.minutes, timer.seconds)
})

startBtnElements.addEventListener("click", () => {
    timer.start()
})

pauseBtnElements.addEventListener("click", () => {
    timer.pause()
})

resetBtnElements.addEventListener("click", () => {
    timer.reset()
})