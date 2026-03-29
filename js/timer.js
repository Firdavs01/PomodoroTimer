"use strict";

import { settings } from "./settings.js";

export class Timer {

  // В констуктор пишем параметры которые нужны

  constructor(workTime, breakTime, onTick) {
    this.workTime = workTime;
    this.breakTime = breakTime;

    this.minutes = settings.workTime;
    this.seconds = 0;
    this.isRunning = false;
    this.mode = "work";
    this.sessionCompleted = 0;

    this.intervalId = null;
    this.onTick = onTick
  }

  start() {
    if (this.isRunning) return;

    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
    this.isRunning = false;
    this.intervalId = null;
  }

  reset() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.workTime = settings.workTime
    this.breakTime = settings.breakTime

    this.minutes = this.mode === "work" ? this.workTime : this.breakTime;
    this.seconds = 0;
    this.isRunning = false;

    if (this.onTick) this.onTick()
  }

  tick() {
    this.seconds -= 1;

    if (this.seconds < 0) {
      this.seconds = 59;
      this.minutes -= 1;
    }

    if (this.minutes < 0) {
      this.switchMode();
    }

    if (this.onTick) this.onTick()
  }

  switchMode() {
    if (this.mode === "work") {
      this.mode = "break";
      this.minutes = this.breakTime;
      this.sessionCompleted += 1;
    } else {
      this.mode = "work";
      this.minutes = this.workTime;
    }

    this.seconds = 0;
  }
}