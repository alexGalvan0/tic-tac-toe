#Tic Tac Toe
## INIT
## Global Vars:
> Winning conditions
winConditions: [
                 <br>
        [0, 1, 2]<br>
        [0, 3, 6]<br>
        [0, 4, 8]<br>
        [3, 4, 5]<br>
        [1, 4, 7]<br>
        [2, 4, 6]<br>
        [6, 7, 8]<br>
        [2, 5, 8]<br>
    ]
## State
> Board State:
>   - List of 9 empty strings being populated
>   - board: [      <br>
        '', '', ''  <br>
        '', '', ''  <br>
        '', '', ''  <br>
    ]
>   - Player Turn x or o
>   - Positions obtained by x
>   - Position obtained by o

## Questions:
> How to track moves?
> How do we know what has been played
> How to change plavers Turn

## Classes:
> **MODEL**
>   - Contains the state of the Board
>   - constains x ocupied spots
>   - contains y ocupied spots


> **VIEW**
>   - Contains the HTML Elements
>   - Body
>       - Container
>           - Row
>             - col
>                - 9 btns (game play)
>                   - on click event check to see if any of the occupied spots match a whole winning condition.
> - **Methods**
>   - Create elememts
>       - Use an object inside 

> **CONTROLLER**
> - Contains the Methods
>   - Init
>       - Renders page
>   - Reset
>       -Brings state back to start.
>       - Reset board to all strings,
>       - clear position x and positiony
>       - Init()
>   - Update Player
>       - Updates the player turn from x to o
>           - if player turn = x, turn player turn to y


### INIT()