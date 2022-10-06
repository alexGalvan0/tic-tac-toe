import { view } from "./view";
import { model } from "./model";

export let controller ={
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
        controller.init()
    }


}