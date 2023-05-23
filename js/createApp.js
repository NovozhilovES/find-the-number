import { createCards } from "./createCard.js";
import { createdDemoCard, countdownStartGame } from "./demoCard.js";

export let gameObject = {
    level: 1,
    numberFind: 10,
    points: 0,
    bonus: 1,
    timeCountdown: 60,
    gameOver: false,
    totalAnswers: 0,
    correctAnswers: 0,
}

export function createDomView(demoStatus) {

    document.body.replaceChildren();

    const container = document.createElement('div');
    const app = document.createElement('div');
    const headBlock = document.createElement('div');
    const containerCard = document.createElement('div');
    const progressWindow = document.createElement('div');

    const headText = document.createElement('p');

    const headFindNumber = document.createElement('p');

    const containerTime = document.createElement('div');
    const containerLevel = document.createElement('div');
    const containerPoints = document.createElement('div');
    const containerBonus = document.createElement('div');

    const progressTime = document.createElement('p');
    const progressLevel = document.createElement('p');
    const progressPoints = document.createElement('p');
    const progressBonus = document.createElement('p');

    const timeValue = document.createElement('p')
    const levelValue = document.createElement('p');
    const pointsValue = document.createElement('p');
    const bonusValue = document.createElement('div');
    const bonusMultiply = document.createElement('p');

    for (let i = 0; i < 5; i++ ) {
        const bonusIndicator = document.createElement('div');
        bonusValue.append(bonusIndicator);
        bonusIndicator.classList.add('bonus-indicator');
    }

    bonusValue.append(bonusMultiply);

    document.body.append(container);
    container.append(app);

    app.append(headBlock);
    app.append(progressWindow);
    app.append(containerCard);

    headBlock.append(headText);
    headBlock.append(headFindNumber);

    progressWindow.append(containerTime);
    progressWindow.append(containerLevel);
    progressWindow.append(containerPoints);
    progressWindow.append(containerBonus);

    containerTime.append(progressTime);
    containerLevel.append(progressLevel);
    containerPoints.append(progressPoints);
    containerBonus.append(progressBonus);

    containerTime.append(timeValue);
    containerLevel.append(levelValue);
    containerPoints.append(pointsValue);
    containerBonus.append(bonusValue);

    container.classList.add("container");
    app.classList.add("app");
    headBlock.classList.add("head-block");
    containerCard.classList.add('container-card');
    progressWindow.classList.add('progress-window');
    headText.classList.add('head-text');
    headFindNumber.classList.add('head-find-number');

    containerTime.classList.add('container-time');
    containerLevel.classList.add('container-level');
    containerPoints.classList.add('container-points');
    containerBonus.classList.add('container-bonus');

    bonusValue.classList.add('indicator-container');
    bonusMultiply.classList.add('multiply');


    timeValue.classList.add('time');
    progressLevel.classList.add('level');
    progressPoints.classList.add('points');
    progressBonus.classList.add('bonus');


    progressTime.textContent = 'Время';
    progressLevel.textContent = 'Уровень:';
    progressPoints.textContent = 'Очки:';
    progressBonus.textContent = 'Бонус:';

    timeValue.textContent = "00:" + gameObject.timeCountdown;
    levelValue.textContent = gameObject.level + '-9';
    pointsValue.textContent = gameObject.points;
    bonusMultiply.textContent = 'x' + gameObject.bonus;

    headText.textContent = 'Найдите указанное число:' + " ";
    headFindNumber.textContent = ' ' + gameObject.numberFind;

    demoStatus == true ? windowStartGame(app, containerCard, headFindNumber) : createCards(containerCard, gameObject.level);

}

function windowStartGame(app, container, headFindNumber) {
    const windowStart = document.createElement('div');
    const handHelps = document.createElement('img')
    const startGameText = document.createElement('p');

    app.append(windowStart);
    windowStart.append(handHelps);
    windowStart.append(startGameText);

    windowStart.classList.add('window-modal-start');
    handHelps.classList.add('hand');
    startGameText.classList.add('start-text');

    container.style.transform = `translateX(0px)`;
    headFindNumber.style.transform = `translateX(0px)`;

    handHelps.src = './img/hand.svg';
    startGameText.innerText = 'Нажмите на экран, \n что бы продолжить';

    createdDemoCard(container);

    windowStart.addEventListener('click', () => {
        app.replaceChildren();
        countdownStartGame(app, container);
    });
}