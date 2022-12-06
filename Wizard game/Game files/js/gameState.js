function initState(){
let posY = Math.floor(Math.random() * 1000)
let posX = 0  

return{
        player: 'Boqn',
        score: 0,
        wizard: {
width: 82,
height: 100,
posY,
posX, 
speed: 10
        },
        keys: {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight:false,
    Space: false
        },
        fireball:{
            width:40,
            height:40,
            speed:15

        },
        bug:{
width: 40,
height:40,
speed: 15,
 durationBug: 0
        }
    }


}