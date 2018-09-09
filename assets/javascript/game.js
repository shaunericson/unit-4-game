// Defining variables

var computerScore = 0;
var playerScore = 0;
var wins = 0;
var losses = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

// Set random values for computer and crytsals
function random() {
    computerScore = Math.floor(Math.random() * (120 - 19) + 19)
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
}

random();

$(document).ready(function() {

    $("#computerScoreValue").text(computerScore);

    $("#crystalOne").on("click", function() {
        playerScore += crystalOne;
        $("#playerScoreValue").text(playerScore);
        evaluateGame();
    });

    $("#crystalTwo").on("click", function() {
        playerScore += crystalTwo;
        $("#playerScoreValue").text(playerScore);
        evaluateGame();
    });

    $("#crystalThree").on("click", function() {
        playerScore += crystalThree;
        $("#playerScoreValue").text(playerScore);
        evaluateGame();
    });

    $("#crystalFour").on("click", function() {
        playerScore += crystalFour;
        $("#playerScoreValue").text(playerScore);
        evaluateGame();
    });

    function evaluateGame() {
        if (computerScore < playerScore) {
            losses++;
            playerScore = 0;
            random();
            $("#computerScoreValue").text(computerScore);
            $("#gameStatus").text("You Lose!");
            $("#currentWins").text(wins);
            $("#currentLosses").text(losses);
            $("#playerScoreValue").text(playerScore);
        } else if (computerScore == playerScore) {
            wins++;
            playerScore = 0;
            random();
            $("#computerScoreValue").text(computerScore);
            $("#gameStatus").text("You Win!");
            $("#currentWins").text(wins);
            $("#currentLosses").text(losses);
            $("#playerScoreValue").text(playerScore);
        }
    }

});