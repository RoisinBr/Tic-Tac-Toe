var gameSquare = document.querySelectorAll('.game-square')
var newGameButton = document.querySelector('.new-game-btn')
var winnerDisplay = document.querySelector('.winner-display')
var playerOneScore = document.querySelector('.player-1-score')
var playerTwoScore = document.querySelector('.player-2-score')

var playerTurnCounter = 0;
var playerOneScoreCounter = 0;
var playerTwoScoreCounter = 0;
var playerOneOutcome
var playerTwoOutcome
var playerOneTurns = [];
var playerTwoTurns = [];
var winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

var handleSquareClick = function(event) {
    playerTurnCounter++;
    var eventId = Number(event.target.dataset.id);
    if (playerTurnCounter % 2 === 0) {
        event.target.textContent = 'O';
        playerTwoTurns.push(eventId);
        event.target.removeEventListener('click', handleSquareClick);
    } else {
        event.target.textContent = 'X';
        playerOneTurns.push(eventId);
        event.target.removeEventListener('click', handleSquareClick);
    }
    winningCombinations.forEach(function(winningCombination) {
        determineWinner(winningCombination);
    })
}

var determineWinner = function(winningCombination) {
    if (playerOneTurns.includes(winningCombination[0]) &&      
        playerOneTurns.includes(winningCombination[1]) &&      
        playerOneTurns.includes(winningCombination[2])) {
            winnerDisplay.textContent = 'X IS THE WINNER';
            playerOneScoreCounter++;
            playerOneScore.textContent = playerOneScoreCounter;
            highlightWinner(winningCombination);     
    } else if (playerTwoTurns.includes(winningCombination[0]) &&      
        playerTwoTurns.includes(winningCombination[1]) &&      
        playerTwoTurns.includes(winningCombination[2])) {
            winnerDisplay.textContent = 'O IS THE WINNER';
            playerTwoScoreCounter++;
            playerTwoScore.textContent = playerTwoScoreCounter;
            highlightWinner(winningCombination);
    } else if (playerTurnCounter === 9) {
            winnerDisplay.textContent = "IT'S A DRAW";
    }
}
    
var highlightWinner = function (winningCombination) {
    gameSquare.forEach(function(square) {
        var squareId = Number(square.dataset.id);
        for (i=0; i<winningCombination.length; i++) {
            if (squareId === winningCombination[i]) {
                square.style.backgroundColor = 'lightGreen';
                square.removeEventListener('click', handleSquareClick);
            } else {
                square.removeEventListener('click', handleSquareClick);
            }
        }
    })
}

var handleNewGameButtonClick = function () {
    gameSquare.forEach(function(square) {
        square.textContent = ' ';
        square.addEventListener('click', handleSquareClick);
        square.style = '.odd';
    })
    winnerDisplay.textContent = ' ';
    playerOneTurns = [];    
    playerTwoTurns = [];
    playerTurnCounter = 0;
}

gameSquare.forEach(function(square) {
    square.addEventListener('click', handleSquareClick);
})
newGameButton.addEventListener('click', handleNewGameButtonClick);

// A link to your hosted working game in the URL section of your GitHub repo ??
// A ``readme.md`` file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// Presentation on Friday 2:45