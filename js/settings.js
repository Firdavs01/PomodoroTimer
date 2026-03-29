"use strict";

// Сохраняем все в переменную saved, то есть, все что находиться в localeStorage
const saved = localStorage.getItem("pomodoroSettings");

// если в saved, есть данные, то мы их парсим
const defaultSettings = saved
  ? JSON.parse(saved) // иначе, если данных нет то задаем дефолтные значения
  : {
      workTime: 25,
      breakTime: 5,
    };


// В константу settings, мы присваиваем новый прокси
const settings = new Proxy(defaultSettings, {
  
  // если данные в defautSettings некорректные, то прокси выдает ошибку
  set(target, key, value, receiver) {
    if (typeof value !== "number" || value < 1 || value > 60) {
      throw new Error("uncorrect znacheniye");
    }

    // Если данные правильные, то проходят дальше и сохраняются
    Reflect.set(target, key, value, receiver);
    localStorage.setItem("pomodoroSettings", JSON.stringify(target));
    return true;
  },

  // просто читаем
  get(target, key, reсeiver) {
    return Reflect.get(target, key, reсeiver);
  },
});

export { settings };
