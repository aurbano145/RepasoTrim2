class Regex {
    checkEmail(emailValue, display) {
        if (/[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/.test(emailValue)) {
            display.innerHTML = "The email introduced is VALID";
            console.log("valid");
        } else {
            display.innerHTML = "The email introduced is NOT VALID";
            console.log("not valid");
        }
    }
}

export {Regex};