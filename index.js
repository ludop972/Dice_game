//Elements from DOM
let btnStartGame = document.getElementById("buttonStartGame");
let btnNewGame = document.getElementById("buttonNewGame");
let btnRoll = document.getElementById("buttonRoll");
let btnHold = document.getElementById("buttonHold");
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
arrowLeft.style.display = "none";
arrowRight.style.display = "none";
let pics = [
  "de_1.png",
  "de_2.png",
  "de_3.png",
  "de_4.png",
  "de_5.png",
  "de_6.png",
];

let dice = document.querySelectorAll("#die-1"); // sélectionne toute les images de dés donc va shake
let dieOneValue;
let toStock = [];
let playerOne = false;
let playerTwo = false;
let temporyScore = 0;
let winValue = 100;
let stock = 0; 
// function for roll dice
function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });

  setTimeout(() => {
    dice.forEach((die) => {
      die.classList.remove("shake");
    });

    dieOneValue = Math.floor(Math.random() * 6) + 1;

    document.getElementById("die-1").src =
      "assets/dice/" + "de_" + dieOneValue + ".png";

    temporyScore += dieOneValue;

    getScore(Number(temporyScore));
  }, 1000);
}

function getScore(score) {
  if (playerOne) {
    toStock = score; // valeur de stockage

    document.querySelector("#playerOneTemporyScore").innerHTML =
      "Tempory score : " + score;

    if (dieOneValue <= 1) {
      temporyScore = 0;

      document.querySelector("#playerOneTemporyScore").innerHTML =
        "you loose your tempory score, wait your round";

      playerOne = false;
      playerTwo = true;

      arrowLeft.style.display = "none";
      arrowRight.style.display = "block";
    }
  } else if (playerTwo) {
    toStock = score;

    document.querySelector("#playerTwoTemporyScore").innerHTML =
      "Tempory score : " + score;

    if (dieOneValue <= 1) {
      temporyScore = 0;

      document.querySelector("#playerTwoTemporyScore").innerHTML =
        "you loose your tempory score, wait your round";

      playerOne = true;
      playerTwo = false;

      arrowLeft.style.display = "block";
      arrowRight.style.display = "none";
    }
  }

  return toStock;
}

function hold() {
  stock += toStock;
  if(playerOne) {
    document.querySelector("#playerOneScoreHeld").innerHTML =
    "Score held : " + stock;
    document.querySelector("#playerOneTemporyScore").innerHTML =
        "you held your tempory score, wait your round";
    playerOne = false;
    playerTwo = true;
  } else if(playerTwo){
    document.querySelector("#playerTwoScoreHeld").innerHTML = "Score held : " + stock;
    document.querySelector("#playerTwoTemporyScore").innerHTML =
        "you held your tempory score, wait your round";
    playerOne = true;
    playerTwo = false;
  }

  console.log("score  à stocké : " + toStock + "\n et valeur stocké/additionné " + stock);
}

//event for hold the score
btnHold.addEventListener("click", () => {
  hold();
});

//events  and function for start the first game and new game
function startGame() {
  playerOne = true;
  arrowLeft.style.display = "block";
}

btnStartGame.addEventListener("click", () => {
  startGame();

  //event for roll the dice
  btnRoll.addEventListener("click", () => {
    roll();
  });
});

btnNewGame.addEventListener("click", () => {
  location.reload();
})
