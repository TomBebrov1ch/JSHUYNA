let text = document.getElementById('main_text')
var firstButton = document.getElementById('button_rock')
let secondButton = document.getElementById('button_scissors')
let thirdButton = document.getElementById('button_paper')
var user = document.getElementById('user')
var comp = document.getElementById('comp')
var result = document.getElementById('result')

var choice = ['rock', 'scissors', 'paper']

var randomChoice = ''

function setRandom() {
    randomChoice = choice[Math.floor(Math.random() * choice.length)]
}

function disabledButton() {
    if (firstButton) {
        disabled = true
    }
}

firstButton.addEventListener('click', function(){
    setRandom()
    result.innerHTML += randomChoice
})  

