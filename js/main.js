import {Player} from "./player.js";

var inputField = document.getElementById("boatInput");
var confirmButton = document.getElementById("confirmButton");
var displayBoats = document.getElementById("playerBoats");

var p1 = new Player();

confirmButton.addEventListener('click', function() {p1.createBoats(inputField, displayBoats)});