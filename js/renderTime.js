"use strict";

export function formatTime(minutes, seconds) {

    const min = String(minutes).padStart(2, "0")
    const sec = String(seconds).padStart(2, "0")

    return `${min}:${sec}`
}