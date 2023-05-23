import { clickCard } from "./clickCard.js";
import { gameObject } from "./createApp.js";
import { gameOver } from "./gameOverWindow.js";
import { progressChange } from "./progressChange.js";

let numberArr = [];

export function createCards(container, level) {
    setTimeout(() => {
       container.classList.add('show-card');
    }, 1000);
    progressChange();
    numberArr = [];
    if(gameObject.gameOver !== true) {
        switch(level) {
            case 1:
                cards(6,container, 0, 99);
                break;
            case 2:
                cards(6,container, 10, 99);
                break;
            case 3:
                cards(6,container, 10, 999);
                break;
            case 4:
                cards(12,container, 100, 999);
                break;
            case 5:
                cards(12,container, 100, 999);
                break;
            case 6:
                cards(16,container, 100, 999);
                break;
            case 7:
                cards(16,container,  1000, 9999);
                break;
            case 8:
                cards(25,container, 1000, 9999);
                break;
            case 9:
                cards(25,container, 1000, 9999);
                break;
        }    
    } else {
        gameOver();
    }
    
}

function cards(total, container, rangeA,rangeB) {

    const headText = document.querySelector('.head-text');
    for(let i = 0; i < total; i++) {
        const randomEffect = randomEffectCard();
        const cardElement = document.createElement('div');
        const numberElem = document.createElement('p');
        const backColor = randomColor();
        container.append(cardElement);
        cardElement.append(numberElem);

        cardElement.classList.add('card');
        numberElem.classList.add('number');

        if(gameObject.level > 2) {
            randomEffect.effectCard !== 'effect-card-two' ? cardElement.classList.add(`${randomEffect.effectCard}`) : numberElem.classList.add(`${randomEffect.effectCard}`);
            resizeCard(cardElement, numberElem, gameObject.level);
        }

        cardElement.style.backgroundColor = backColor.colorBackground;
        const number = getNumberRandom(rangeA,rangeB);
        numberElem.textContent = number;
        cardElement.dataset.number = number;
        numberArr.push(number);
    }
    gameObject.numberFind = numberChoice(numberArr);
    headText.textContent = 'Найдите указанное число:' + ' ' + gameObject.numberFind;
    clickCard(gameObject.numberFind, container);
}


// CREATE NUMBER CARD

function getNumberRandom(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function numberChoice(arr) {
    const find = Math.floor(Math.random() * arr.length);
    return arr[find];
}

//-----------------------------


// RANDOM COLOR BACKGROUND CARD

export function randomColor() {
    const colorArray = [
        '#F28E37',
        '#A595CE',
        '#6E7ADB',
        '#4DB8EC',
        '#71C19C',
        '#3300a2',
        '#820037',
        '#f3eae8',
        '#fffb52',
        '#12707c',
        '#892f46',
        '#fffba8'
    ];

    const colorRandom = randomInteger(0,9);

    const colorBackground = colorArray[colorRandom];

    return {
        colorBackground,
    }
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

//-----------------------------------------------------------

// RANDOM EFFECT 

function randomEffectCard() {
    const effectArray = [
        'effect-card-one',
        'effect-card-two',
        'effect-card-three',
    ]

    const randomEffect = randomInteger(0,2);

    const effectCard = effectArray[randomEffect];

    return {
        effectCard,
    }
}

// RESIZE CARD 

function resizeCard(card, number, level) {
    if(level == 4 || level == 5) {
        card.classList.add('resize-card-one');
        number.classList.add('resize-number-one');
    }
    else if(level == 6 || level == 7) {
        card.classList.add('resize-card-two');
        number.classList.add('resize-number-two');
    }
    else if(level > 7) {
        card.classList.add('resize-card-three');
        number.classList.add('resize-number-three');
    }
}
