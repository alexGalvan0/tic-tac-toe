import { createElements } from './function.js';


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
    playerTurn: 'X',
    xPositions : [],
    oPositions : []
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
           let tile = createElements({
                type:'button',
                id:i,
                parent:col,
                classes:['btns']
            })
            tile.addEventListener('click',() => {
                tile.innerHTML = model.playerTurn;
                if(model.playerTurn == "X"){
                    model.playerTurn = 'O'
                } else {
                    model.playerTurn ="X"
                }
                tile.disabled = true
                model.board[i] = tile.innerHTML
                this.checkWinCondition()

            })
        }
        let currentPlayer = createElements({
            type:'h3',
            text:`It is player ${model.playerTurn}'s turn`,
            parent:app
        })
    },

    checkWinCondition: function() {
        //check win condiition
        model.board.forEach((item,i) => {
            if(item == 'X'){
                if(model.xPositions.includes(i)){
                    return
                } else {
                    model.xPositions.push(i)
            }
            }else if(item == 'O'){
                if(model.oPositions.includes(i)){
                    return
                } else {
                    model.oPositions.push(i)
            }
    
            }
        })
        let sortedX = model.xPositions.sort().toString()
        let sortedO = model.oPositions.sort().toString();
    
        model.winConditions.forEach((winCondition) => {
            if(sortedX.includes(winCondition)){
                alert('x wins')
                controller.reset()
                controller.init()
            } else if( sortedO.includes(winCondition)){
                alert('y wins')
                controller.reset()
                controller.init()
               
            }
        })
    
        
    }
    

}

//interaction
let controller ={
    init: function(){

        view.render()
    },

    reset: function(){
        const body = document.body;
        const app = document.getElementById('app')

        app.remove()
        createElements({
            id:'app',
            parent: body
        })

       model.board = [
            '', '', '',
            '', '', '',
            '','', ''
        ]
        model.xPositions = [];
        model.oPositions = [];
        model.playerTurn = 'X'
    }


}
controller.init()


