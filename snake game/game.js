import {
    update as updateSnake,
    draw as drawSnake,
    onKeyDown,
    SNAKE_SPEED
} from "./snake.js"
import {
    draw as drawFood
} from "./food.js"
let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsTillLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsTillLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    update();
    draw();
}

document.onkeydown = onKeyDown;
window.requestAnimationFrame(main)

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}