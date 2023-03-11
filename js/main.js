import {Game} from "./game.js";

var createShow = document.getElementById("createShow");
var createInput = document.getElementById("createInput");
var createButton = document.getElementById("createButton");
var errorDisplay = document.getElementById("errorDisplay");
var playerShipsDisplay = document.getElementById("playerShips");

var attackShow = document.getElementById("attackShow");
var attackInput = document.getElementById("attackInput");
var attackButton = document.getElementById("attackButton");
var attackDisplay = document.getElementById("attackDisplay");

var game = new Game();

createButton.addEventListener('click', function() {game.createShips(createInput, createShow, playerShipsDisplay, attackShow, errorDisplay)});

attackButton.addEventListener('click', function() {game.attackShip(attackInput, attackButton, attackDisplay, playerShipsDisplay)});