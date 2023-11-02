function submitRandom(event) {
  event.preventDefault()

  let playerOne = document.getElementById('playerOne').value;
  let playerTwo = document.getElementById('playerTwo').value;
  let playerThree = document.getElementById('playerThree').value;
 
  let numberOne = document.getElementById('oneNumber').value;
  let numberTwo = document.getElementById('twoNumber').value;
  let numberThree = document.getElementById('threeNumber').value;

  document.getElementById('playerOne').value = '';
  document.getElementById('playerTwo').value = '';
  document.getElementById('playerThree').value = '';

  document.getElementById('oneNumber').value = '';
  document.getElementById('twoNumber').value = '';
  document.getElementById('threeNumber').value = '';

  let newRound = {
    playerOne: playerOne,
    playerTwo: playerTwo,
    playerThree: playerThree,
    numberOne: Number(numberOne),
    numberTwo: Number(numberTwo),
    numberThree: Number(numberThree),

    
  }
  axios({
    method: 'POST',
    url: '/round',
    data: newRound
}).then((response) => {
    getInventory()
})

  console.log("JavaScript is loaded!")
}





submitRandom()