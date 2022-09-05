let counterDead = 0;
let counterLost = 0;

for (let index = 1; index < 10; index++ ) {
    const clickUser = document.getElementById(`hole${index}`)
    clickUser.onclick = () => {
        console.log(counterLost);

        let countDead = document.getElementById('dead')
        let countLost = document.getElementById('lost')

        if (countDead < 10 || countLost < 5) {
            switch(clickUser.className) {
                case "hole hole_has-mole":
                    counterDead += 1;
                    countDead.textContent = counterDead;
                
                case "hole":
                    counterLost += 1;
                    countDead.textContent = counterDead;                
        } 
        } else {
            countDead.textContent = 8;
            countDead.textContent = 18;
        }

    }
}


