"use strict"

import { Timer } from "./timer.js";
import { settings } from "./settings.js";

import { pauseBtnElements, resetBtnElements, startBtnElements } from "./elements.js";

const timer = new Timer(settings.workTime, settings.breakTime)

startBtnElements.addEventListener("click", () => {
    timer.start()
})

pauseBtnElements.addEventListener("click", () => {
    timer.pause()
})

resetBtnElements.addEventListener("click", () => {
    timer.reset()
})