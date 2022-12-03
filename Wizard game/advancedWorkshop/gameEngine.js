function start(state,game){
let wizard = prepareGame().CreateWizard()

window.requestAnimationFrame(gameLoop.bind(null,wizard))




}function gameLoop(){

    console.log('gameLoop');
    window.requestAnimationFrame(gameLoop.bind(null,wizard))

    
    }