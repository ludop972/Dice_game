//Elements from DOM
let btnStartGame = document.getElementById("buttonStartGame");
let btnNewGame = document.getElementById("buttonNewGame");
let btnRoll = document.getElementById("buttonRoll");
let btnHold = document.getElementById("buttonHold");
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let rules = document.getElementById("rules");
let dice = document.querySelectorAll("#die-1");

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

//variables for the game logic
let dieOneValue;
let toStock = [];
let playerOne = false;
let playerTwo = false;
let temporyScore = 0;
let winValue = 100;
let stockPlayerOne = 0;
let stockPlayerTwo = 0;


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

//function for get tempory score
function getScore(score) {
  if (playerOne) {
    toStock = score;

    document.querySelector("#playerOneTemporyScore").innerHTML =
      "Tempory score : " + score;

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

    document.querySelector("#playerTwoTemporyScore").innerHTML =
      "Tempory score : " + score;

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

//function for hold the score and next player/win player too
function hold() {
  if (playerOne) {
    stockPlayerOne += toStock;

    document.querySelector("#playerOneScoreHeld").innerHTML =
      "Score held : " + stockPlayerOne;

    document.querySelector("#playerOneTemporyScore").innerHTML =
      "SCORE HELD ! &#128513;";

    playerOne = false;
    playerTwo = true;

    arrowRight.style.display = "block";
    arrowLeft.style.display = "none";

    temporyScore = 0;
    toStock = 0;

    if(stockPlayerOne >= 100){
      alert("Player One Win the Game !")
    }
  } else if (playerTwo) {
    stockPlayerTwo += toStock;

    document.querySelector("#playerTwoScoreHeld").innerHTML =
      "Score held : " + stockPlayerTwo;

    document.querySelector("#playerTwoTemporyScore").innerHTML =
      "SCORE HELD !&#128513;";

    playerOne = true;
    playerTwo = false;

    arrowRight.style.display = "none";
    arrowLeft.style.display = "block";

    temporyScore = 0;
    toStock = 0;

    if(stockPlayerTwo >= 100){
      alert("Player Two Win the Game !")
    }
  }
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

btnNewGame.addEventListener("click", () => {
  location.reload();
});

btnStartGame.addEventListener("click", () => {
  startGame();

  //event for roll the dice
  btnRoll.addEventListener("click", () => {
    roll();
  });
});

//For watch rules
rules.addEventListener("click",()=>{
  alert(`The game includes 2 players on a single screen.
  Each player has a temporary score and an overall score (score held).
  At each turn, the player has his temporary score initialized to 0 and can roll a die as many times as he wishes. the
  result of a throw is added to the temporary score.
  During his turn, the player can decide at any time to:
  - Click on the “Hold” option, which sends the points from the temporary score to the held score. It will then be the
  other player's turn.
  - Roll the dice. If he rolls a 1, his temporary score is lost and his turn ends.
  The first player to reach 100 points on a held score wins the game.` + `\n\n\n TRADUCTION FR : \n\n\n Le jeu comprend 2 joueurs sur un seul et même écran. 
  Chaque joueur possède un score temporaire et un score global (score held).
  À chaque tour, le joueur a son tempory score initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le 
  résultat d’un lancer est ajouté au tempory score. 
  Lors de son tour, le joueur peut décider à tout moment de:
  - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du tempory score vers le score held. Ce sera alors le
  tour de l’autre joueur.
  - Lancer le dé. S’il obtient un 1, son score temporaire est perdu et c’est la fin de son tour.
  Le premier joueur qui atteint les 100 points sur score held gagne le jeu`);
})