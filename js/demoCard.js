import { randomColor } from "./createCard.js";
import { createDomView } from "./createApp.js";
import { timerGame } from "./timer.js";

export function createdDemoCard(container) {

    let demoArr = [10, 37, 12, 54, 27, 12]
    
    for(let i = 0; i < 6; i++) {
        const cardElement = document.createElement('div');
        const numberElem = document.createElement('p');
        const backColor = randomColor();
        container.append(cardElement);
        cardElement.append(numberElem);

        cardElement.classList.add('card');
        numberElem.classList.add('number');

        cardElement.style.backgroundColor = backColor.colorBackground;
        const number = demoArr[i];
        numberElem.textContent = number;
    }
}

export function countdownStartGame(app) {
    const blackout = document.createElement('div');
    const timeCircle = document.createElement('div');

    app.append(blackout);
    blackout.append(timeCircle);

    blackout.classList.add('blackout-window');
    timeCircle.classList.add('countdown-time');

    timeCircle.textContent = 3;
    let timerStartGame = setInterval(() => {
                if(timeCircle.textContent > 0) {
                    timeCircle.textContent -= 1;
                } else {
                    clearInterval(timerStartGame);
                    createDomView(false);
                    timerGame();
                }
            }, 1000);
}