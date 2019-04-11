var gameSquare = document.querySelectorAll('.game-square')
var newGameButton = document.querySelector('.new-game-btn')
var winnerDisplay = document.querySelector('.winner-display')
var playerOneScore = document.querySelector('.player-1-score')
var playerTwoScore = document.querySelector('.player-2-score')

var clickCounter = 0;
var playerOneCounter = 0;
var playerTwoCounter = 0;
var playerOne = [];
var playerTwo = [];
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
    clickCounter++
    if (clickCounter % 2 === 0) {
        event.target.textContent = 'O'
        playerTwo.push(Number(event.target.id))
        event.target.removeEventListener('click', handleSquareClick)
    } else {
        event.target.textContent = 'X'
        playerOne.push(Number(event.target.id))
        event.target.removeEventListener('click', handleSquareClick)
}
    winningCombinations.forEach(function(combination) {
        determineWinner(combination);
    })
}

var determineWinner = function(combination) {
    if (playerOne.includes(combination[0]) &&      
        playerOne.includes(combination[1]) &&      
        playerOne.includes(combination[2])) {
            winnerDisplay.textContent = 'WINNER';
            playerOneCounter++;
            gameSquare.forEach(function(square) {
                square.removeEventListener('click', handleSquareClick);
            playerOneScore.textContent = playerOneCounter
        })
    }
    if (playerTwo.includes(combination[0]) &&      
        playerTwo.includes(combination[1]) &&      
        playerTwo.includes(combination[2])) {
            winnerDisplay.textContent = 'WINNER'
            playerTwoCounter++;
            gameSquare.forEach(function(square) {
                square.removeEventListener('click', handleSquareClick)
            playerTwoScore.textContent = playerTwoCounter
    })
    }
}

var handleNewGameClick = function () {
    gameSquare.forEach(function(square) {
        square.textContent = ' ';
        square.addEventListener('click', handleSquareClick);
    })
    winnerDisplay.textContent = ' ';
    playerOne = [];    
    playerTwo = [];
}

gameSquare.forEach(function(square) {
    square.addEventListener('click', handleSquareClick)
})
newGameButton.addEventListener('click', handleNewGameClick);

// Transfer to working docs without all the mess /
// get working for playone and playertwo /
// I need it to stop when there is a winner. /
// I need to change that to images 
// Design layout.
// Run through all the names and readability.
// Deploy your game online, where the rest of the world can access it??
// A link to your hosted working game in the URL section of your GitHub repo ??
// A ``readme.md`` file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// Presentation on Friday 2:45