document.getElementById('startgame').addEventListener('click', startGame)


let startscreen = document.getElementsByClassName('start-game')[0]
let playgame = document.getElementsByClassName('play-game')[0]

document.addEventListener('keyup', keyUpFunc)
document.addEventListener('keydown', keyDownFunc )
let availableCode = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Space"
]
function keyUpFunc(e){
if(availableCode.includes(e.code)){
    state.keys[e.code] = false
}

}
function keyDownFunc(e){
    if(availableCode.includes(e.code)){
        state.keys[e.code] = true
    }
    
    }



let state = initState()
let game = prepareGame()
function startGame() {
    console.log('hi');
    startscreen.style.display = 'none',
    playgame.style.display = 'block'
    start(state, game)
}