import { gameObject } from "./createApp.js";

export function progressChange() {
    const changeLevel = document.querySelector('.container-level').lastElementChild;
    changeLevel.textContent = gameObject.level +  '-9';

    const changePoints = document.querySelector('.container-points').lastElementChild;
    changePoints.textContent = gameObject.points;

    const changeBonus = document.querySelector('.multiply');
    changeBonus.textContent = 'x' + gameObject.bonus;

    const bonusIndicator = document.querySelectorAll('.bonus-indicator');

    bonusIndicator[gameObject.bonus - 1].classList.add('bonus-next');

}