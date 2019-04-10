//Layout:
//Need 9 sqaures to get side by side - use flex box for each row.
//For now use background colour and change to images later.
//Header
    //h1 game name
//Main
    //section x3 - flex containers
        //div x 3
//footer
    //h2 winner is...

//Alternating clicks:
//Need to alternate between users
//Use a click counter and an if statement. If click counter is even then change one background color, if click counter is odd change to another background color.

//game
//When there is three in a row of a given colour, then strike through
//when there is a winner unhide winner footer
//does this need grid layout? Stick with what you know
//I need to identify and listen to every single div
//There needs to an event on click.
//When there is three in a row (within a section), three in column or three in a diagnol that match there is a winner.
//When three in a row can use section, but when three in column?? Or a diagnol??
//you need to come up with all the combinations of three in a row and give it a variable now for now to work with later - dont know how to do this whne using select all - may need to change to 9 different buttons to check.
//For selectorAll can update to a new class with desired images.  How do you then say those IN A ROW??

var gameSquareOne = document.querySelector('.game-square-1');
var gameSquareTwo = document.querySelector('.game-square-2');
var gameSquareThree = document.querySelector('.game-square-3');
var gameSquareFour = document.querySelector('.game-square-4');
var gameSquareFive = document.querySelector('.game-square-5');
var gameSquareSix = document.querySelector('.game-square-6');
var gameSquareSeven = document.querySelector('.game-square-7');
var gameSquareEight = document.querySelector('.game-square-8');
var gameSquareNine = document.querySelector('.game-square-9');
var footer = document.querySelector('footer')
var winnerDisplay = document.querySelector('.winner-display')
var newGameButton = document.querySelector('.new-game-btn')

var clickCounter = 0;


var handleGameSquareClick = function (event) {
    clickCounter++
    if (clickCounter % 2 === 0) {
        event.target.style.backgroundColor = 'blue'
    } else {
        event.target.style.backgroundColor = 'purple'
    }
    decideWinner();
}

var handleNewGameClick = function () {
    gameSquareOne.style.backgroundColor = 'transparent';
    gameSquareTwo.style.backgroundColor = 'transparent';
    gameSquareThree.style.backgroundColor = 'transparent';
    gameSquareFour.style.backgroundColor = 'transparent';
    gameSquareFive.style.backgroundColor = 'transparent';
    gameSquareSix.style.backgroundColor = 'transparent';
    gameSquareSeven.style.backgroundColor = 'transparent';
    gameSquareEight.style.backgroundColor = 'transparent';
    gameSquareNine.style.backgroundColor = 'transparent';
}

var decideWinner = function () {
    if (gameSquareOne.style.backgroundColor === 'purple' && gameSquareTwo.style.backgroundColor === 'purple' && gameSquareThree.style.backgroundColor === 'purple') {
        gameSquareOne.style.backgroundColor = 'green'
        gameSquareTwo.style.backgroundColor = 'green'
        gameSquareThree.style.backgroundColor = 'green'
        footer.textContent = 'WINNER'
    }
    if (gameSquareOne.style.backgroundColor === 'blue' && gameSquareTwo.style.backgroundColor === 'blue' && gameSquareThree.style.backgroundColor === 'blue') {
        gameSquareOne.style.backgroundColor = 'green'
        gameSquareTwo.style.backgroundColor = 'green'
        gameSquareThree.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if (gameSquareFour.style.backgroundColor === 'purple' && gameSquareFive.style.backgroundColor === 'purple' && gameSquareSix.style.backgroundColor === 'purple') {
        gameSquareFour.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareSix.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if (gameSquareFour.style.backgroundColor === 'blue' && gameSquareFive.style.backgroundColor === 'blue' && gameSquareSix.style.backgroundColor === 'blue') {
        gameSquareFour.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareSix.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if (gameSquareSeven.style.backgroundColor === 'purple' && gameSquareEight.style.backgroundColor === 'purple' && gameSquareNine.style.backgroundColor === 'purple') {
        gameSquareSeven.style.backgroundColor = 'green'
        gameSquareEight.style.backgroundColor = 'green'
        gameSquareNine.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if (gameSquareSeven.style.backgroundColor === 'blue' && gameSquareEight.style.backgroundColor === 'blue' && gameSquareNine.style.backgroundColor === 'blue') {
        gameSquareSeven.style.backgroundColor = 'green'
        gameSquareEight.style.backgroundColor = 'green'
        gameSquareNine.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if (gameSquareOne.style.backgroundColor === 'purple' && gameSquareFour.style.backgroundColor === 'purple' && gameSquareSeven.style.backgroundColor === 'purple') {
        gameSquareOne.style.backgroundColor = 'green'
        gameSquareFour.style.backgroundColor = 'green'
        gameSquareSeven.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if (gameSquareOne.style.backgroundColor === 'blue' && gameSquareFour.style.backgroundColor === 'blue' && gameSquareSeven.style.backgroundColor === 'blue') {
        gameSquareOne.style.backgroundColor = 'green'
        gameSquareFour.style.backgroundColor = 'green'
        gameSquareSeven.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if (gameSquareTwo.style.backgroundColor === 'blue' && gameSquareFive.style.backgroundColor === 'blue' && gameSquareEight.style.backgroundColor === 'blue') {
        gameSquareTwo.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareEight.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if(gameSquareTwo.style.backgroundColor === 'purple' && gameSquareFive.style.backgroundColor === 'purple' && gameSquareEight.style.backgroundColor === 'purple') {
        gameSquareTwo.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareEight.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if(gameSquareThree.style.backgroundColor === 'purple' && gameSquareSix.style.backgroundColor === 'purple' && gameSquareNine.style.backgroundColor === 'purple') {
        gameSquareThree.style.backgroundColor = 'green'
        gameSquareSix.style.backgroundColor = 'green'
        gameSquareNine.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if(gameSquareThree.style.backgroundColor === 'blue' && gameSquareSix.style.backgroundColor === 'blue' && gameSquareNine.style.backgroundColor === 'blue') {
        gameSquareThree.style.backgroundColor = 'green'
        gameSquareSix.style.backgroundColor = 'green'
        gameSquareNine.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if(gameSquareOne.style.backgroundColor === 'blue' && gameSquareFive.style.backgroundColor === 'blue' && gameSquareNine.style.backgroundColor === 'blue') {
        gameSquareOne.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareNine.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if(gameSquareOne.style.backgroundColor === 'purple' && gameSquareFive.style.backgroundColor === 'purple' && gameSquareNine.style.backgroundColor === 'purple') {
        gameSquareOne.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareNine.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if(gameSquareThree.style.backgroundColor === 'purple' && gameSquareFive.style.backgroundColor === 'purple' && gameSquareSeven.style.backgroundColor === 'purple') {
        gameSquareThree.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareSeven.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
    if(gameSquareThree.style.backgroundColor === 'blue' && gameSquareFive.style.backgroundColor === 'blue' && gameSquareSeven.style.backgroundColor === 'blue') {
        gameSquareThree.style.backgroundColor = 'green'
        gameSquareFive.style.backgroundColor = 'green'
        gameSquareSeven.style.backgroundColor = 'green'
        winnerDisplay.textContent = 'WINNER'
    }
}

gameSquareOne.addEventListener('click', handleGameSquareClick)
gameSquareTwo.addEventListener('click', handleGameSquareClick)
gameSquareThree.addEventListener('click', handleGameSquareClick)
gameSquareFour.addEventListener('click', handleGameSquareClick)
gameSquareFive.addEventListener('click', handleGameSquareClick)
gameSquareSix.addEventListener('click', handleGameSquareClick)
gameSquareSeven.addEventListener('click', handleGameSquareClick)
gameSquareEight.addEventListener('click', handleGameSquareClick)
gameSquareNine.addEventListener('click', handleGameSquareClick)
newGameButton.addEventListener('click', handleNewGameClick)



// gameSquare.forEach(function(square) {
//     square.addEventListener('click', handleGameSquareClick)
// })