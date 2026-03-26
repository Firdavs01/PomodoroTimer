"use strict";

export class Timer {
  constructor(workTime, breakTime) {
    this.workTime = workTime;
    this.breakTime = breakTime;

    this.minutes = workTime;
    this.seconds = 0;
    this.isRunning = false;
    this.mode = "work";
    this.sessionCompleted = 0;

    this.intervalId = null;
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
    this.minutes = this.mode === "work" ? this.workTime : this.breakTime;
    this.seconds = 0;
    this.isRunning = false;
  }

  tick() {
    this.seconds -= 1;

    if (this.seconds < 0) {
      this.seconds = 59;
      this.minutes -= 1;
    }

    if (this.minutes < 0) {
      this.switchedMode();
    }
  }

  switchedMode() {
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