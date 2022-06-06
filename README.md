# Dice_game
A Dice Hundred game made for a project training in js 

App build with Html/Css/Bootstrap and Js Vanilla


You can found in app.js some functions :

1. For start the game(every buttons are hidden) : 
  ```
  function startGame() {
  playerOne = true;
  arrowLeft.style.display = "block";
  btnNewGame.style.display = "block";
  btnHold.style.display = "block";
  btnRoll.style.display = "block";
}

btnNewGame.addEventListener("click", () => {
  location.reload();
});

btnStartGame.addEventListener("click", () => {
  startGame();
```
