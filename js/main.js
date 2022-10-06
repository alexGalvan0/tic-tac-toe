import { createElements } from './function.js';


const app = document.getElementById('app')

//data
let model = {
    winConditions : [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [1,4,7],
        [2,4,6],
        [6,7,8],
        [2,5,8]
    ],
    
   board : [
        '', '', '',
        '', '', '',
        '','', ''
    ],
    playerTurn: 'X'
    
   
}

//visible data
let view ={

    render: function(){

        let container = createElements({
            classes:['container'],
            parent:app
        })

        let row = createElements({
            classes:['row'],
            parent:container
        })

        let col = createElements({
            classes:['col'],
            parent: row
        })

        for (let i=0; i<9; i++){
           let tiles = createElements({
                type:'button',
                id:i,
                parent:col,
                classes:['btns']
            })
        }
        let currentPlayer = createElements({
            type:'h3',
            text:`It is player ${model.playerTurn}'s turn`,
            parent:app
        })
    },

}

//interaction
let controller ={

    init: function(){
        view.render()
    },

}

controller.init()