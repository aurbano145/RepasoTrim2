class Game {
    playerBoats = [];
    enemyBoats = [];

    createBoats(inputData, confirmBtn, display) {
        if(/(?:1?\d|20?)+[,]+(?:1?\d|20?)/.test(inputData.value)) {
            var position = (inputData.value).split(",");
            var positionArray = parseInt(position[0]) + "," + parseInt(position[1]);

            //console.log(positionArray);

            if(this.playerBoats.length > 0) {

                if(this.playerBoats.includes(positionArray)) {
                    console.log("The position has been already registered");
                } else {
                    this.playerBoats.push(positionArray);

                    positionArray = [];

                    inputData.value = '';

                    display.innerHTML = this.playerBoats.join(' | ');
                    //console.log(JSON.stringify(this.playerBoats));
                }

            } else {
                this.playerBoats.push(positionArray);

                positionArray = [];

                inputData.value = '';

                display.innerHTML = this.playerBoats.join(' | ');
                //console.log(JSON.stringify(this.playerBoats));
            }

        } else {
            console.log("Position format is incorrect");
        }

        if(this.playerBoats.length == 5) {
            confirmBtn.disabled = true;
            
            this.createEnemyBoats();
        }
    }

    createEnemyBoats() {
        do {
            var randomNum1 = Math.floor(Math.random() * 21);
            var randomNum2 = Math.floor(Math.random() * 21);
            var enemyPosArray = '';

            for(var i=0; i < 5; i++) {
                do {
                    enemyPosArray = randomNum1 + "," + randomNum2;
                } while (enemyPosArray == this.playerBoats[i]);

                i+=1;
            }

            this.enemyBoats.push(enemyPosArray);

        } while (this.enemyBoats.length < 5);

        console.log(JSON.stringify(this.enemyBoats));
    }

    attackPhase(attackShow, attackInput, attackButton, attackDisplay) {
        do {
            attackShow.visibility = true;

            var playerAttack = attackInput.value;

            if(this.enemyBoats.includes(playerAttack)) {
                for(var i = 0; i < this.enemyBoats.length; i++) {
                    if(playerAttack == this.enemyBoats[i]) {
                        this.enemyBoats.splice(i, 1);
                    }
                }
                
                console.log("Enemy ship sunk!");

            } else {
                console.log("Attack failed!");
            }

            var randomNum1 = Math.floor(Math.random() * 21);
            var randomNum2 = Math.floor(Math.random() * 21);
            
            var enemyAttack = randomNum1 + "," + randomNum2;

            if(this.playerBoats.includes(enemyAttack)) {
                for(var i = 0; i < this.playerBoats.length; i++) {
                    if(enemyAttack == this.playerBoats[i]) {
                        this.playerBoats.splice(i, 1);
                    }
                }
                
                console.log("The enemy has sunk one of your ships! --> " + enemyAttack);

            } else {
                console.log("Enemy attack failed!");
            }

        } while (this.playerBoats.length != 0 || this.enemyBoats.length != 0);
        
        attackButton.disabled = true;
        
        if(this.playerBoats.length == 0) {
            console.log("You lose...");
        } else {
            console.log("You win!")
        }
    }
}

export {Game};