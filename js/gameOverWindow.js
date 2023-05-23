import { gameObject } from "./createApp.js";

export function gameOver() {

    const app = document.querySelector('.app');

    app.replaceChildren();

    const head = document.createElement('div');
    const resultList = document.createElement('ul');

    const resultPoint = document.createElement('li');
    const correctAnswers = document.createElement('li');
    const accuracy = document.createElement('li');

    head.classList.add('game-over-head');
    resultList.classList.add('result-list');

    head.textContent = 'Ваши результаты';

    app.append(head);
    app.append(resultList);

    resultList.append(resultPoint);
    resultList.append(correctAnswers);
    resultList.append(accuracy);

    const accuracyResult = Math.round(gameObject.correctAnswers*100/gameObject.totalAnswers);

    resultPoint.textContent = "Текущий результат:" + " " + gameObject.points;
    correctAnswers.textContent = 'Верных ответов' + " " + gameObject.correctAnswers + " " + 'из' + " " + gameObject.totalAnswers;
    accuracy.textContent = 'Точность ответов' + " " +  accuracyResult + '%';
    

}