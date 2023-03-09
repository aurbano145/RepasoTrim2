class Game {
    playerBoats = [];
    enemyBoats = [];

    createBoats(inputData, confirmBtn, display) {
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
            confirmBtn.disable = true;
            
            this.createEnemyBoats();
        }
    }

    createEnemyBoats() {
        do {
            var randomNum1 = Math.floor(Math.random() * 21);
            var randomNum2 = Math.floor(Math.random() * 21);
            var enemyPosArray = [randomNum1, randomNum2];

            for(var i=0; i < 5; i++) {
                do {
                    enemyPosArray = [randomNum1, randomNum2];
                } while (enemyPosArray == this.playerBoats[i]);

                i+=1;
            }

            this.enemyBoats.push(enemyPosArray);

        } while (this.enemyBoats.length < 5);

        console.log(JSON.stringify(this.enemyBoats));
    }
}

export {Game};