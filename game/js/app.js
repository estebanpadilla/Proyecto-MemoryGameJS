/**
* @name main.js
* @file Add a small description for this file.
* @author Esteban Padilla, ep@estebanpadilla.com
* @version 1.0.0
*/

"use strict";
import { GameManager } from "./gameManager.js";
window.addEventListener('load', init, false);
function init() {
    const gameManager = new GameManager();
}