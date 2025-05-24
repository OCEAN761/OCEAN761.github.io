ctx.beginPath();
ctx.font = `${grid}px serif`;
ctx.fillText("🍎", food.x, food.y + grid);
ctx.fill();
const eatSound = document.getElementById('eatSound');
let score = 0;
const scoreDisplay = document.getElementById('score');

function updateGame() {
  // ...

  if (head.x === food.x && head.y === food.y) {
    food = getRandomFoodPosition();
    score += 1;
    scoreDisplay.textContent = "Score: " + score;
    eatSound.play(); // play sound
  } else {
    snake.pop();
  }

  // On reset:
  if (
  head.x < 0 || head.x >= canvas.width ||
  head.y < 0 || head.y >= canvas.height ||
  snake.slice(1).some(s => s.x === head.x && s.y === head.y)
) {

  // ...
}
}
