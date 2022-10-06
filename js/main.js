let playerTurn = 'X'

let active = true;
let gameActive = false;
let winner = '';
let draw = false;

let board = [
    '', '', '',
    '', '', '',
    '','', ''
];


const root = document.getElementById('root');
function createElements({
    type = 'div',
    text = '',
    parent,
    classes,
    id = '',
    alt,
    src,
    setAttribute

} = {}) {
    let element = document.createElement(type)

    if (classes == undefined) {
        ''
    } else {
        classes.forEach(classAdded => {
            element.classList.add(classAdded)
        });
    }
    element.innerHTML = text;
    element.id = id
    element.alt = alt
    element.src = src
    element.setAttribute = setAttribute
    parent.appendChild(element)
    return element
}

const container = createElements({
    classes: ['container'],
    parent: root
})

const row = createElements({
    classes: ['row', 'text-center'],
    parent: container
})

const col = createElements({
    classes: ['col','pt-5'],
    parent: row
})

for (let i = 0; i <= 8; i++) {
   let tile =  createElements({
        type: 'button',
        id: i,
        parent: col,
        text: '',
        classes: ['btn','btn-primary','tile']
    })
    tile.addEventListener('click',() =>{
        tile.innerHTML = playerTurn;
        if(playerTurn == "X"){
            playerTurn='O'
        } else {
            playerTurn ="X"
        }
        tile.disabled = true
        board[i] = tile.innerHTML
        checkWinCondition();
        
    }
    )
}

// Functionality


//
function init() {
    ///render page
    return
}

const winConditions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [2,5,8]
];
let xPositions = [];
let oPositions = [];
function checkWinCondition() {
    //check win condiition
    board.forEach((item,i) => {
        if(item == 'X'){
            if(xPositions.includes(i)){
                return
            } else {
                xPositions.push(i)
        }
        }else if(item == 'O'){
            if(oPositions.includes(i)){
                return
            } else {
                oPositions.push(i)
        }

        }
    })
    let sortedX = xPositions.sort().toString()
    let sortedO = oPositions.sort().toString();

    winConditions.forEach((winCondition) => {
        if(sortedX.includes(winCondition)){
            alert('x wins')
        } else if( sortedO.includes(winCondition)){
            alert('y wins')
        }
    })

    
}


