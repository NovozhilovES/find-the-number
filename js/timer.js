
import { gameObject } from "./createApp.js";

export function timerGame() {

    const time = document.querySelector('.time');
    const progressWindow = document.querySelector('.progress-window');
    setTimeout(() => {
        progressWindow.classList.add('show-progress');
    },2000);

    let timerGame = setInterval(() => {
        if(gameObject.timeCountdown > 0) {
            gameObject.timeCountdown -= 1;
            time.textContent = '00:' + gameObject.timeCountdown;
        } else {
            clearInterval(timerGame);
            gameObject.gameOver = true;
        }
    }, 1000);

} 
