import { createElements } from './function.js';
import { model } from './model.js';


//visible data
let view ={
    render: function(){
        const body = document.body;
        body.classList.add('text-center')

        let container = createElements({
            classes:['container','d-flex','justify-content-center'],
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

        let resetButton = createElements({
            type:'button',
            classes:['text-center','border'],
            text:'RESET',
            parent:app
        })
        resetButton.addEventListener('click', controller.reset)
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
                setTimeout(controller.reset,2000)

            } else if( sortedO.includes(winCondition)){
                alert('y wins')
                setTimeout(controller.reset,2000)
     
               
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
        body.classList.add('text-center')
        const app = document.getElementById('app')
        body.classList.add('text-center')

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
        controller.init()
    }


}
controller.init()


