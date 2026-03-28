"use strict";

const saved = localStorage.getItem("pomodoroSettings");
const defaultSettings = saved
  ? JSON.parse(saved)
  : {
      workTime: 25,
      breakTime: 5,
    };

const settings = new Proxy(defaultSettings, {
  set(target, key, value, receiver) {
    if (typeof value !== "number" || value < 1 || value > 60) {
      throw new Error("uncorrect znacheniye");
    }

    Reflect.set(target, key, value, receiver);
    localStorage.setItem("pomodoroSettings", JSON.stringify(target));
    return true;
  },
  get(target, key, reсeiver) {
    return Reflect.get(target, key, reсeiver);
  },
});

export { settings };
