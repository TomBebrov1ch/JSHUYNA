var mainText = document.getElementById('mainText')
var rockButton = document.getElementById('rockButton')
var scissorsButton = document.getElementById('scissorsButton')
var paperButton = document.getElementById('paperButton')
var userResult = document.getElementById('userResult')
var compResult = document.getElementById('compResult')
var winResult = document.getElementById('winResult')
var restartButton = document.getElementById('restartButton')
var startButton = document.getElementById('startButton')
var mainScreen = document.getElementById('mainScreen')

var choice = ['rock', 'scissors', 'paper']


var randomChoice;
var userValue;
var compValue;
var finalResult;


function setRandom() {
    randomChoice = Math.floor(Math.random() * choice.length)
    switch(randomChoice) {
        case 0: 
        compValue = 'rock'
        break;
        case 1: 
        compValue = 'scissors'
        break;
        case 2: 
        compValue = 'paper'
        break;
    }
}

   

function winner() {
    switch(finalResult){
        case userValue == compValue:
            return finalResult = 'Ничья!' 
        case userValue == 'rock':
            compValue == 'scissors'
            return finalResult = 'Вы выиграли!'
        case userValue == 'scissors':
            compValue == 'paper'
            return finalResult = 'Вы выиграли!'
        case userValue == 'paper':
            compValue == 'rock'
            return finalResult = 'Вы выиграли!'
        default:
            return finalResult = 'Вы проиграли :('
    }
}


rockButton.addEventListener('click', function(){ 
    winner()
    setRandom()
    userValue = choice[0]
    userResult.innerHTML = `Ваш ход: ${userValue}`
    compResult.innerHTML = `Ход противника ${compValue}`
    winResult.innerHTML = `${finalResult}`
})


scissorsButton.addEventListener('click', function(){
    winner()
    setRandom()
    userValue = choice[1]
    userResult.innerHTML += `Ваш ход: ${userValue}`
    compResult.innerHTML = `Ход противника ${compValue}`
    winResult.innerHTML = `${finalResult}`
})


paperButton.addEventListener('click', function(){
    winner()
    setRandom()
    userValue = choice[2]
    userResult.innerHTML += `Ваш ход: ${userValue}`
    compResult.innerHTML = `Ход противника ${compValue}`
    winResult.innerHTML = `${finalResult}`
})

restartButton.addEventListener('click', function() {
   if (mainScreen.style.display = 'none'){
    startButton.style.display = 'none'
    startButton.style.display = 'block'
   } else {
    mainScreen.style.display = 'none'
    startButton.style.display = 'block'
   }
})


