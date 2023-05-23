import { gameObject } from "./createApp.js";
import { createCards } from "./createCard.js";


export function clickCard(findNumber, container) {
    const card = document.querySelectorAll('.card');
    for (const item of card) {
        item.addEventListener('click', () => {
            const getNumber = item.getAttribute('data-number');
            gameObject.totalAnswers++;
            checkCard(getNumber,findNumber, container);
    })};        
}

function checkCard(number, findNumber, container) {
    const app = document.querySelector('.app');
    const answer = document.createElement('div');

    if(number == findNumber) {
        if(gameObject.level < 9) { gameObject.level++; }
        gameObject.bonus <= 4 && gameObject.bonus++; 
        gameObject.points += Number(number) * gameObject.bonus;
        gameObject.correctAnswers++;
        app.append(answer);
        answer.classList.add('correct-answer');

    }
    else {
        app.append(answer);
        answer.classList.add('incorrect-answer');

    }

        container.classList.remove('show-card');
        container.classList.add('hidden-card');
        setTimeout(() => {
            answer.remove();
            container.classList.remove('hidden-card');
            container.replaceChildren();
            createCards(container, gameObject.level);
        }, 1000);
}

