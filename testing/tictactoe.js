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

var gameSquare = document.querySelectorAll('.game-square');

var clickCounter = 0;

var handleGameSquareClick = function (event) {
    clickCounter++
    if (clickCounter % 2 === 0) {
        event.target.style.backgroundColor = 'blue'
    } else {
        event.target.style.backgroundColor = 'purple'
    }
}

gameSquare.forEach(function(square) {
    square.addEventListener('click', handleGameSquareClick)
})