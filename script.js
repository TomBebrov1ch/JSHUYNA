var firstButton = document.getElementById('firstButton')
var userResult = document.getElementById('userResult')
var compResult = document.getElementById('compResult')
var finalResult = document.getElementById('finalResult')

var choice = ['rock', 'scissors', 'paper']

var randomChoice;

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

    
function userValue() {
    let user = choice
    let userRock = choice[0]
    let userScissors = choice[1]
    let userPaper = choice[2]
}


function winner() {
    switch(finalResult){
        case user == compValue:
            return 'Ничья!'
        case user = 'rock':
            comp = 'scissors'
            return 'Вы выиграли!'
        case userScissors = 'scissors':
            comp = 'paper'
            return 'Вы выиграли!'
        case userPaper = 'paper':
            comp = 'rock'
            return 'Вы выиграли!'
        default:
            return 'Вы проиграли :('
    }
}


firstButton.addEventListener('click', function(){ 
    userResult.innerHTML = userValue()
})