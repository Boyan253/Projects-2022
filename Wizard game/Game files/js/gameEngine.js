


function start(state, game){
   game.createWizard(state)
window.requestAnimationFrame(gameLoop.bind(null,state, game))
}
let score = 0
function gameLoop(state, game , time){
    document.querySelector('input').value = `Score ${score}`
    let {wizard} = state
let {wizardElement} = game
console.log('gameloop')
    modifyWizardPos(state,game)
if (state.keys.Space) {
    game.wizardElement.style.backgroundImage = "url('./images/wizard-fire.png')"
game.createFireball(wizard,state.fireball)

}else{
    game.wizardElement.style.backgroundImage = "url('./images/wizard.png')"
}
let bugElement = document.querySelectorAll('.bugs')
document.querySelectorAll('.fireball').forEach(fireball => {
    let fireballLeft = parseInt(fireball.style.left)
   bugElement.forEach(bug =>{
    if(detectCollision(bug, fireball)){
        bug.remove()
        fireball.remove()
        score++
    }
   }
    )
   
    if(fireballLeft > document.body.clientWidth){
        fireball.remove()
    }
    fireball.style.left = parseInt(fireball.style.left) + state.fireball.speed + 'px'

   
})
document.querySelectorAll('.bugs').forEach(bug =>{
    let bugleft = parseInt(bug.style.left)
if(bugleft < 0){
    bug.remove()
}
    bug.style.left = bugleft - state.bug.speed + 'px'
})
if(time > state.bug.durationBug){
    game.createBug(state.bug);
    state.bug.durationBug += time + 100
}
    wizardElement.style.top = wizard.posY + "px"
    wizardElement.style.left = wizard.posX + "px"
    // wizardElement.style.right = wizard.left
    window.requestAnimationFrame(gameLoop.bind(null,state, game))
}


function modifyWizardPos(state,game){
let {wizard} = state


if(state.keys.ArrowUp){
    wizard.posY = Math.max(wizard.posY - wizard.speed, 0 )
}
if(state.keys.ArrowDown){
    wizard.posY = Math.min(wizard.posY + wizard.speed, document.body.clientHeight - wizard.height)
}if(state.keys.ArrowLeft){
    wizard.posX = Math.max(wizard.posX - wizard.speed , 0)
}if(state.keys.ArrowRight){
    wizard.posX = Math.min(wizard.posX + wizard.speed, document.body.clientWidth - wizard.width )
}

}
function detectCollision(a, b){
let first = a.getBoundingClientRect()
let second  = b.getBoundingClientRect()

let hascollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right)
return hascollision

{

}

}