# Dice_game
A Dice Hundred game made for a project training in Js vanilla

## The rules

**The game includes 2 players on a single screen.
  Each player has a temporary score and an overall score (score held).
  At each turn, the player has his temporary score initialized to 0 and can roll a die as many times as he wishes. the
  result of a throw is added to the temporary score.
  During his turn, the player can decide at any time to:
  - Click on the “Hold” option, which sends the points from the temporary score to the held score. It will then be the
  other player's turn.
  - Roll the dice. If he rolls a 1, his temporary score is lost and his turn ends.
  The first player to reach 100 points on a held score wins the game.**


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

2. For Roll the dice : 
```
btnRoll.addEventListener("click", () => {
    roll();
  });
  
 function roll() {
  rollSong.play();

  dice.forEach(function (die) {
    die.classList.add("shake");
  });

  setTimeout(() => {
    dice.forEach((die) => {
      die.classList.remove("shake");
    });

    dieOneValue = Math.floor(Math.random() * 6) + 1;

    document.getElementById("die-1").src = `assets/dice/de_${dieOneValue}.png`;

    temporyScore += dieOneValue;

    getScore(Number(temporyScore));
  }, 1800);
}
```
3. For hold the tempory score :
```
function getScore(score) {
  if (playerOne) {
    toStock = score;

    document.querySelector(
      "#playerOneTemporyScore"
    ).innerHTML = `Tempory score : ${score}`;

    if (dieOneValue <= 1) {
      temporyScore = 0;

      document.querySelector("#playerOneTemporyScore").innerHTML =
        "SCORE LOOSE &#128533;";

      playerOne = false;
      playerTwo = true;

      arrowLeft.style.display = "none";
      arrowRight.style.display = "block";
    }
  } else if (playerTwo) {
    toStock = score;

    document.querySelector(
      "#playerTwoTemporyScore"
    ).innerHTML = `Tempory score : ${score}`;

    if (dieOneValue <= 1) {
      temporyScore = 0;

      document.querySelector("#playerTwoTemporyScore").innerHTML =
        "SCORE LOOSE &#128533;";

      playerOne = true;
      playerTwo = false;

      arrowLeft.style.display = "block";
      arrowRight.style.display = "none";
    }
  }

  return toStock;
}
function hold() {
  if (playerOne) {
    stockPlayerOne += toStock;

    document.querySelector(
      "#playerOneScoreHeld"
    ).innerHTML = `Score held : ${stockPlayerOne}`;

    document.querySelector("#playerOneTemporyScore").innerHTML =
      "SCORE HELD ! &#128513;";

    playerOne = false;
    playerTwo = true;

    arrowRight.style.display = "block";
    arrowLeft.style.display = "none";

    temporyScore = 0;
    toStock = 0;

    if (stockPlayerOne >= 100) {
      win("One");
    }
  } else if (playerTwo) {
    stockPlayerTwo += toStock;

    document.querySelector(
      "#playerTwoScoreHeld"
    ).innerHTML = `Score held : ${stockPlayerTwo}`;

    document.querySelector("#playerTwoTemporyScore").innerHTML =
      "SCORE HELD !&#128513;";

    playerOne = true;
    playerTwo = false;

    arrowRight.style.display = "none";
    arrowLeft.style.display = "block";

    temporyScore = 0;
    toStock = 0;

    if (stockPlayerTwo >= 100) {
      win("Two");
    }
  }
}
```
4. for win the game (score = 100) : 
5. ```
6. et win = (player) => {
  alert(`Player ${player} Win the Game !`);
  if (player === "One") {
    document.getElementById("P1").innerHTML = "&#127881; Player 1 &#127881;";

    document.querySelector("#playerOneTemporyScore").innerHTML =
      "You win ! &#x1F609;";

    document.querySelector("#playerTwoTemporyScore").innerHTML =
      "You loose ! &#x1F605;";

    arrowRight.style.display = "none";
  } else if (player === "Two") {
    document.getElementById("P2").innerHTML = "&#127881; Player 2 &#127881;";

    document.querySelector("#playerTwoTemporyScore").innerHTML =
      "You win ! &#x1F609;";

    document.querySelector("#playerOneTemporyScore").innerHTML =
      "You loose ! &#x1F605;";

    arrowLeft.style.display = "none";
  }
  btnStartGame.remove();
  btnRoll.remove();
  btnHold.remove();
};
7. ```
