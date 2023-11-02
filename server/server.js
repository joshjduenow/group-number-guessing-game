const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5001;

let roundArray = [
 {
  playerOne: 'josh',
  playerTwo: 'james',
  playerThree: 'brian',
  numberOne: '12',
  numberTwo: '1',
  numberThree: '5',
  round: '1' ,
  randomNumber: '6',
 }

]

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/round', (req, res) => {
  console.log('POST /round')
  console.log('req.body', req.body)
  let newRound = req.body
  roundArray.push(newRound)
  res.sendStatus(201)
})

app.get('/round', (req, res) => {
  console.log('GET /round!')
  res.send( { array: roundArray, randomNumber: randomNumber} )
})


app.listen(PORT, () => {
  console.log(`Server is running on port, http://localhost:${PORT}`)

})
