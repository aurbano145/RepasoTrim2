import {Game} from "./game.js";

var inputField = document.getElementById("boatInput");
var confirmButton = document.getElementById("confirmButton");
var displayBoats = document.getElementById("playerBoats");

var game = new Game();

confirmButton.addEventListener('click', function() {game.createBoats(inputField, confirmButton, displayBoats)});