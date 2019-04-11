var players = [
    playerOne,
    playerTwo
]

var passInPlayer = function(player) {
    if (player.includes(numberOne) &&      
        player.includes(numberTwo) &&      
        player.includes(numberThree)) {
              winnerDisplay.textContent = 'WINNER';
              gameSquare.forEach(function(square) {
                  if (Number(square.dataset.id) === numberOne || Number(square.dataset.id) === numberTwo || Number(square.dataset.id) === numberThree) {
                      square.style.backgroundColor = 'lightGreen'
                      square.removeEventListener('click', handleSquareClick);
                  } else {
                      square.removeEventListener('click', handleSquareClick);
                  }
                  })
                  playerCounterIncrease();
              }
              
      }
  
      var playerCounterIncrease = function(player) {
          if (player === playerOne) {
              playerOneCounter++;
              playerOneScore.textContent = playerOneCounter;   
          } else {
              playerTwoCounter++;
              playerTwoScore.textContent = playerTwoCounter;
          }
      }
  
  var numberOne
  var numberTwo
  var numberThree
  
  var determineWinner = function(combination) {
      numberOne = combination[0];
      numberTwo = combination[1];
      numberThree = combination[2];
      players.forEach(function(player) {
          passInPlayer(player);
      })
  
  }

  players = [playerOne, playerTwo]