import {
    update as updateFood,
    food
} from "./food.js"

export const SNAKE_SPEED = 2;
export const snakeBody = [{
    x: 11,
    y: 11
}]
const direction = {
    x: -1,
    y: 0,
    path: 'up'
}
const newDirection = []

export function update() {
    updateDirection();
    let nextX = snakeBody[0].x + direction.x;
    let nextY = snakeBody[0].y + direction.y;
    if (nextX < 0 || nextY < 0 || nextX > 21 || nextY > 21)
        return;
    snakeBody.unshift({
        x: nextX,
        y: nextY
    });
    if (nextX == food.x && nextY == food.y) {
        updateFood();
    } else {
        snakeBody.pop();
    }
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

function updateDirection() {
    while (newDirection.length > 0) {
        const newPath = newDirection.shift();
        if (newPath !== newDirection.path) {
            if (newPath === 'up' && direction.path !== 'down') {
                direction.path = newPath;
                direction.x = -1;
                direction.y = 0;
                newDirection.length = 0;
            } else if (newPath === 'down' && direction.path !== 'up') {
                direction.path = newPath;
                direction.x = 1;
                direction.y = 0;
                newDirection.length = 0;
            } else if (newPath === 'right' && direction.path !== 'left') {
                direction.path = newPath;
                direction.x = 0;
                direction.y = -1;
                newDirection.length = 0;
            } else if (newPath === 'left' && direction.path !== 'right') {
                direction.path = newPath;
                direction.x = 0;
                direction.y = 1;
                newDirection.length = 0;
            }
        }
    }
}

export function onKeyDown(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        newDirection.unshift('up')
    } else if (e.keyCode == '40') {
        newDirection.unshift('down')
    } else if (e.keyCode == '37') {
        newDirection.unshift('right')
    } else if (e.keyCode == '39') {
        newDirection.unshift('left')
    }
}