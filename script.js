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
var container = document.getElementsByClassName('container')

var choice = ['Камень', 'Ножницы', 'Бумага']


var randomChoice;
var userValue;
var compValue;
var finalResult;



function setRandom() {
    randomChoice = Math.floor(Math.random() * choice.length)
    switch(randomChoice) {
        case 0: 
        compValue = 'Камень'
        break;
        case 1: 
        compValue = 'Ножницы'
        break;
        case 2: 
        compValue = 'Бумага'
        break;
    }
}

   

function winner() {
    switch(true){
        case userValue == compValue:
            return finalResult = 'Ничья!'
        case userValue === 'Камень' &&
            compValue === 'Ножницы':
        case userValue === 'Ножницы' &&
            compValue === 'Бумага':
        case userValue === 'Бумага' &&
            compValue === 'Камень':
            return finalResult = 'Вы выиграли!'
        default:
            return finalResult = 'Вы проиграли :('
    }
}


// function reset() {
//     let resetButton = restartButton
//     if (resetButton == true){
//     userResult.value = null
//     compResult.value = null 
//     winResult.value = null
//     }
// }


rockButton.addEventListener('click', function(){ 
    setRandom()
    userValue = choice[0]
    userResult.innerHTML = `Ваш ход: ${userValue}`
    compResult.innerHTML = `Ход противника: ${compValue}`
    winner()
    winResult.innerHTML = `${finalResult}`
    
})


scissorsButton.addEventListener('click', function(){
    setRandom()
    userValue = choice[1]
    userResult.innerHTML += `Ваш ход: ${userValue}`
    compResult.innerHTML = `Ход противника: ${compValue}`
    winner()
    winResult.innerHTML = `${finalResult}`
})


paperButton.addEventListener('click', function(){
    setRandom()
    userValue = choice[2]
    userResult.innerHTML += `Ваш ход: ${userValue}`
    compResult.innerHTML = `Ход противника: ${compValue}`
    winner()            
    winResult.innerHTML = `${finalResult}`
})





startButton.addEventListener('click', function() {
    if (mainScreen.style.display = 'none') {
    mainScreen.style.display = 'flex'
    startButton.style.display = 'none'
} 
})


restartButton.addEventListener('click', function() {
    if (mainScreen.style.display = 'flex'){
    mainScreen.style.display = 'none'
    startButton.style.display = 'flex'
} 
})