"use strict"

import { Timer } from "./timer.js";
import { settings } from "./settings.js";

const timer = new Timer(settings.workTime, settings.breakTime)