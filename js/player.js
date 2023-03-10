class Player {
    boats = [];

    createBoats(inputData, display) {
        if(this.boats.length < 5) {
            if(/[(]+(?:1?\d|20?)+[,]+(?:1?\d|20?)+[)]/.test(inputData.value)) {
                this.boats.push(inputData.value);
                inputData.value = '';

                display.innerHTML = this.boats.join(' - ');
                console.log(JSON.stringify(this.boats));
            } else {
                console.log("Position format is incorrect");
            }
        } else {
            console.log("Full boats");
        }
    }
}

export {Player};