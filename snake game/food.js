import {
    snakeBody
} from "./snake.js"

export const food = {
    x: 6,
    y: 11
}

export function update() {
    while (snakeBody.some(snakeElement => snakeElement.x === food.x && snakeElement.y === food.y)) {
        food.x = Math.floor(Math.random() * 21);
        food.y = Math.floor(Math.random() * 21);
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}