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
//dt talked about storing the player moves and then seeing if each position is there. didnt think of that as a problem.

//for loop through the array and ask does this number equal 0-8. Does it have 1,2,3 - does it hae 4,5,6 - etx
var gameSquare = document.querySelectorAll('.game-square')

var clickCounter = 0;
var playerOne = [];
var playerTwo = [];

var handleSquareClick = function(event) {
    clickCounter++
    if (clickCounter % 2 === 0) {
        event.target.style.backgroundColor = 'blue'
        playerTwo.push(event.target.id)
    } else {
        event.target.style.backgroundColor = 'purple'
        playerOne.push(event.target.id)
}
    determineWinner();
}

//if the array contains and of the below combinations then they have one. To do this go through each of the arrays.  This is a for loop.
    // 1, 2, 3
    // 4, 5, 6
    // 7, 8, 9
    // 1, 4, 7
    // 2, 5, 8
    // 3, 6, 9
    // 1, 5, 9
    // 3, 5, 7

    // var winningCombinationOne = [1, 2, 3]
    // var winningCombinationTwo = [4, 5, 6]
    // var winningCombinationThree = [7, 8, 9]
    // var winningCombinationFour = [1, 4, 7]
    // var winningCombinationFive = [2, 5, 8]
    // var winningCombinationSix = [3, 6, 9]
    // var winningCombinationSeven = [1, 5, 9]
    // var winningCombinationEight = [3, 5, 7]

var determineWinner = function() {
    // for (i=0; i<playerOne.length; i++) {
    //     if (i === 1 && i === 2 && i === 3) {
    if (playerOne.includes('1') && playerOne.includes('2') && playerOne.includes('3')) {
            console.log('Winner')
    }
}
// }

gameSquare.forEach(function(square) {
    square.addEventListener('click', handleSquareClick)
})