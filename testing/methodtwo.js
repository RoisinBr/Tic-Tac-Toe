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
//I need to identify and listen to every single div - REMEMBER you can have multiple classes
//There needs to an event on click.
//When there is three in a row (within a section), three in column or three in a diagnol that match there is a winner.
//When three in a row can use section, but when three in column?? Or a diagnol??
//you need to come up with all the combinations of three in a row and give it a variable now for now to work with later - dont know how to do this whne using select all - may need to change to 9 different buttons to check.
//For selectorAll can update to a new class with desired images.  How do you then say those IN A ROW??
//dt talked about storing the player moves and then seeing if each position is there. didnt think of that as a problem. My original code didnt require storing of player turns.  It was required when you needed to collect the div ids to then check for winning.
//for loop through the array and ask does this number equal 0-8. Does it have 1,2,3 - does it hae 4,5,6 - etx

var gameSquare = document.querySelectorAll('.game-square')
var newGameButton = document.querySelector('.new-game-btn')
var winnerDisplay = document.querySelector('.winner-display')

var clickCounter = 0;
var playerOne = [];
var playerTwo = [];

var handleSquareClick = function(event) {
    clickCounter++
    if (clickCounter % 2 === 0) {
        event.target.style.backgroundColor = 'blue'
        playerTwo.push(Number(event.target.id))
    } else {
        event.target.style.backgroundColor = 'purple'
        playerOne.push(Number(event.target.id))
}
    // determineWinner();
    winningCombinations.forEach(function(combination) {
        determineWinner(combination);
    })
}

//if the array contains any of the below combinations then they have won. To do this go through each of the arrays.  This is a for loop.
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

// var determineWinningCombination = function(num1, num2, num3) {
//     // for (var num = 1; num < 10; num++) {
//     // console.log(num);
//     // if (playerOne.includes(num1))

// }

// determineWinningCombination(winningCombinationOne);

// think about how to make the function work multiple times.  How do I use the function to achieve something. the action you want to be able to repeat. thus no loop within, you want to use a loop outside that calls the function.


var determineWinner = function(combination) {
    // for (i = 0; i<combination.length; i++)
    if (playerOne.includes(combination[0]) &&      playerOne.includes(combination[1]) &&      playerOne.includes(combination[2])) {
            winnerDisplay.textContent = 'WINNER'
    }
}

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

// var winningCombinationOne = [1, 2, 3]
//first determine if the array has a winning combination, then determine if that is true then there is a winner. if true push that in, then if true, true, true = winner

var handleNewGameClick = function () {
    gameSquare.forEach(function(square) {
        square.style.backgroundColor = 'transparent';
    })
}

gameSquare.forEach(function(square) {
    square.addEventListener('click', handleSquareClick)
})
newGameButton.addEventListener('click', handleNewGameClick)

// Transfer to working docs without all the mess
// get working for playone and playertwo
// I need it to stop when there is a winner.
// I need to change that to images 
// Design layout.
// Run through all the names and readability.
// Deploy your game online, where the rest of the world can access it??
// A link to your hosted working game in the URL section of your GitHub repo ??
// A ``readme.md`` file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// Presentation on Friday 2:45pm


// ### Technical Requirements

// Your app must:

// * **Render a game in the browser** /
// * **Switch turns** between more than one player /
// * **Design logic for winning** & **visually display which player won** /
// * **Include separate HTML / CSS / JavaScript files** /
// * Stick with **KISS (Keep It Simple Stupid)** principles /
// * Use **Javascript** for **DOM manipulation** /
// * Use **semantic markup** for HTML and CSS (adhere to best practices) /

// ---

// ### Necessary Deliverables


// * **tomorrow** - At least one artefact of either pseudocode, flow diagram, wireframe, mockup or storyboard demonstrating planning - **Due tomorrow**  / 
// * A **working game, built by you**, hosted somewhere on the internet / 

// * A **git repository hosted on GitHub**, with a link to your hosted game, and **frequent commits** dating back to the very beginning of the project /
