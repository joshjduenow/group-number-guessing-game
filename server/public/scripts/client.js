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
    getRound()
})

  console.log("JavaScript is loaded!")
}

function getRound() {
  axios({
    url: '/round',
    method: 'GET'
}).then((response) => {
    console.log('response.data:', response.data)
    let currentRound = response.data
    //let contentDiv = document.querySelector('');
    renderRound(currentRound)
})

}
function renderRound(currentRound) {
let rounds = document.getElementById('playerRound');
rounds.innerHTML = '';
for (let round of rounds) {
  rounds.innerHTML += `
  <td>${round.numberOne}</td>
  <td>${round.numberTwo}</td>
  <td>${round.numberThree}</td>
  <td>${round.randomNumber}</td>


`
}

}





submitRandom()