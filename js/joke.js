class Joke {
    async getJoke() {
        const res = [];

        for (let i = 0; i < 10; i++) {
            let obj;
            var singleJoke = await fetch('https://official-joke-api.appspot.com/random_joke');
            obj = await singleJoke.json();
            res.push(
                {
                    "setup": obj.setup,
                    "punchline": obj.punchline
                }
            );
        }

        var table = document.getElementById("table");
        var tblBody = document.createElement("tbody");

        for (let i = 0; i < 10; i++) {
            var row = document.createElement("tr");
            var cell = document.createElement("td");

            var cellSetup = document.createElement("h2");
            var setupText = document.createTextNode(res[i].setup);
            cellSetup.appendChild(setupText);

            var cellPunch = document.createElement("p");
            var punchText = document.createTextNode(res[i].punchline);
            cellPunch.appendChild(punchText);

            cell.appendChild(cellSetup);
            cell.appendChild(cellPunch);
            row.appendChild(cell);
            tblBody.appendChild(row);
            table.appendChild(tblBody);
            table.setAttribute("border", "1");
        }

        console.log(res);
    }
}

export {Joke};