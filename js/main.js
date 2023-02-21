import {Regex} from "./regex.js";

var email = document.getElementById("email");
var check = document.getElementById("check");
var result = document.getElementById("result");

var regex = new Regex();

check.addEventListener("click", function() {regex.checkEmail(email.value, result)});