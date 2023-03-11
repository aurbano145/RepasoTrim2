class Game {
    playerShips = [];
    enemyShips = [];
    pattern = /^[(](20|1[0-9]|[0-9]),(20|1[0-9]|[0-9])[)]$/;

    createShips(inputCreate, createShow, createDisplay, attackShow, errorDisplay) {
        var newShip = inputCreate.value;

        if(this.playerShips.length < 5) {
            if(this.pattern.test(newShip)) {
                var match = newShip.match(this.pattern);
                var newPosition = parseInt(match[1]) + "," + parseInt(match[2]);

                if(this.playerShips.length > 0) {

                    if(this.playerShips.includes(newPosition)) {
                        console.log("The position has been already registered...");
                    } else {
                        this.playerShips.push(newPosition);

                        newPosition = [];

                        inputCreate.value = '';

                        createDisplay.innerHTML = "Your ships position: " + this.playerShips.join(' | ');
                        //console.log(JSON.stringify(this.playerBoats));
                    }

                } else {
                    this.playerShips.push(newPosition);

                    newPosition = [];

                    inputCreate.value = '';

                    createDisplay.innerHTML = "Your ships position: " + this.playerShips.join(' | ');
                    //console.log(JSON.stringify(this.playerBoats));
                }

            } else {
                errorDisplay.innerHTML = "Position format is incorrect...";
                //console.log("Position format is incorrect...");
            }
        }

        if(this.playerShips.length == 5) {
            do {
                var randomNum1 = Math.floor(Math.random() * 21);
                var randomNum2 = Math.floor(Math.random() * 21);
                var enemyPosArray = '';

                enemyPosArray = randomNum1 + "," + randomNum2;

                if(this.enemyShips.length > 0) {
                    if(!this.playerShips.includes(enemyPosArray) && !this.enemyShips.includes(enemyPosArray)) {
                        this.enemyShips.push(enemyPosArray);
                    } else {
                        enemyPosArray = randomNum1 + "," + randomNum2;
                    }
                } else {
                    if(!this.playerShips.includes(enemyPosArray)) {
                        this.enemyShips.push(enemyPosArray);
                    } else {
                        enemyPosArray = randomNum1 + "," + randomNum2;
                    }
                }

            } while (this.enemyShips.length < 5);

            console.log(JSON.stringify(this.enemyShips));
            createShow.style.display = 'none';
            attackShow.style.display = 'block';
        }
    }

    attackShip(attackInput, attackButton, attackDisplay, playerShips) {
        if (this.playerShips.length != 0 || this.enemyShips.length != 0) {

            var playerAttack = attackInput.value;

            if(this.pattern.test(playerAttack)) {
                var attackMatch = playerAttack.match(this.pattern);
                var attackPosition = parseInt(attackMatch[1]) + "," + parseInt(attackMatch[2]);

                if(this.enemyShips.includes(attackPosition)) {
                    for(var i = 0; i < this.enemyShips.length; i++) {
                        if(playerAttack == this.enemyShips[i]) {
                            this.enemyShips.splice(i, 1);
                        }
                    }
                    attackDisplay.innerHTML = "Enemy ship sunk!";
                    //console.log("Enemy ship sunk!");
    
                } else {
                    attackDisplay.innerHTML = "Attack failed!";
                    //console.log("Attack failed!");
                }

                var randomNum1 = Math.floor(Math.random() * 21);
                var randomNum2 = Math.floor(Math.random() * 21);
                
                var enemyAttack = randomNum1 + "," + randomNum2;

                if(this.playerShips.includes(enemyAttack)) {
                    for(var i = 0; i < this.playerShips.length; i++) {
                        if(enemyAttack == this.playerShips[i]) {
                            this.playerShips.splice(i, 1);
                        }
                    }
                    attackDisplay.insertAdjacentHTML('beforeend', " & The enemy has sunk one of your ships! --> " + enemyAttack);
                    createDisplay.innerHTML = "Your ships position: " + this.playerShips.join(' | ');
                    //console.log("The enemy has sunk one of your ships! --> " + enemyAttack);
                    //console.log(enemyAttack);

                } else {
                    attackDisplay.insertAdjacentHTML('beforeend', " & Enemy attack failed!");
                    //console.log("Enemy attack failed!");
                    //console.log(enemyAttack);
                }

            } else {
                attackDisplay.innerHTML = "Position format is incorrect...";
                //console.log("Position format is incorrect...");
            }
        } 
        
        if(this.playerShips.length == 0 || this.enemyShips.length == 0) {
            attackButton.disabled = true;
    
            if(this.playerShips.length == 0) {
                attackDisplay.innerHTML = "You lose...";
                //console.log("You lose...");
            } else {
                attackDisplay.innerHTML = "You win!";
                //console.log("You win!")
            }
        }
    }
}

export {Game};