class Game {
    playerBoats = [];
    enemyBoats = [];

    createBoats(inputData, display) {
        if(this.playerBoats.length < 5) {
            if(/(?:1?\d|20?)+[,]+(?:1?\d|20?)/.test(inputData.value)) {
                var position = (inputData.value).split(",");
                var positionArray = [position[0], position[1]];

                this.playerBoats.push(positionArray);

                positionArray = [];

                inputData.value = '';

                display.innerHTML = this.playerBoats.join(' / ');
                console.log(JSON.stringify(this.playerBoats));
            } else {
                console.log("Position format is incorrect");
            }
        } else {
            console.log("Full boats");
            
            if(this.enemyBoats.length < 5) {
                var randomNum = Math.floor(Math.random() * 21);
                var enemyPosArray = [randomNum, randomNum];

                for(var i=0; i < 5; i++) {
                    enemyPosArray.forEach(element => {
                        while(playerBoats[i].includes(element)) {
                            element = randomNum;
                        }


                    })

                    i+=1;
                }
            }
        }
    }
}

export {Game};