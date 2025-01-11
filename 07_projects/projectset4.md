# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code
## project 4
``` javascript
let randomNumber=(Math.floor(Math.random()*100)+1)
console.log(randomNumber)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
//let prevguess=[]
let numguesses=1
let playGame=true//allows you to play the game
let won=0;
if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault()
    let guess=Number(userInput.value)
    //console.log(guess)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  //value that is entered is valid or not
  if(isNaN(guess) || guess>100 || guess<1){
    alert('Please enter a valid number')
  }
  else{
    //prevguess.push(guess)
    if(numguesses===10){
      checkGuess(guess)
      cleanupGuess(guess)
      if(won==0)
      {
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame()
      }
    }
    else{
      checkGuess(guess)
      cleanupGuess(guess)
    }
  }
}
function checkGuess(guess){
 // value is same as random number less or high
 if(guess===randomNumber){
   displayMessage(`You guessed it right`)
   won++
   endGame()
 }
 else{
   if(guess<randomNumber){
    displayMessage(`Number is too low`)
   }
   else{
    displayMessage(`Number is too high`)
   }
 }
}
function displayMessage(message){
  //deals with dom
   lowOrHigh.innerHTML=`<h2>${message}</h2>`

}
function cleanupGuess(guess){
//value ko clean krega array ko update krega 
 userInput.value=""
 guessSlot.innerHTML+=`  ${guess}  `
 numguesses++;
 remaining.innerHTML=`${11-numguesses}`
}
function newGame(){
 const newGame=document.querySelector("#newGame")
 newGame.addEventListener('click',function(e){
  randomNumber=(Math.floor(Math.random()*100)+1)
  console.log(randomNumber)
  numguesses=1
  won=0
  playGame=true
  userInput.removeAttribute('disabled')
  guessSlot.innerHTML = "";
  remaining.innerHTML = "10";
  lowOrHigh.innerHTML = "";
  newGame.remove()
 })
}
function endGame(){
 userInput.value=''
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
 startOver.appendChild(p)
 playGame=false
 newGame()
}
```