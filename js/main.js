"use strict"

import { Timer } from "./timer.js";
import { settings } from "./settings.js";

import { formatTime } from "./renderTime.js";

import { pauseBtnElements, resetBtnElements, startBtnElements, display, workMinusBtn,workPlusBtn } from "./elements.js";

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

workPlusBtn.addEventListener("click", () => {
    settings.workTime += 1
    timer.reset()
})

workMinusBtn.addEventListener("click", () => {
    if (settings.workTime > 1) {
        settings.workTime -= 1
        timer.reset()
    }
})