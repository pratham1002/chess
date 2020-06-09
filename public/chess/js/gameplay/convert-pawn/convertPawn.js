function convertPawn(initialRow, initialCol, finalRow, finalCol) {
    const initial = initialRow.toString() + initialCol.toString()
    const final = finalRow.toString() + finalCol.toString()

    // first make a normal move
    board[initialRow][initialCol].occupiedBy.moved = true
    board[finalRow][finalCol].occupancy = board[initialRow][initialCol].occupiedBy
    board[initialRow][initialCol].occupancy = null
    board[finalRow][finalCol].occupiedBy.moveLocation = board[finalRow][finalCol]
    
    document.getElementById(final).innerHTML = document.getElementById(initial).innerHTML
    document.getElementById(initial).innerHTML = ""

    if (me != turn) {
        return
    }

    // now ask the player what they want in place of pawn
    const choices = document.createElement('div')
    choices.innerHTML = "Please choose what you want in place of pawn"
    document.getElementById("root").appendChild(choices)

    const queen = document.createElement('button') 
    queen.innerHTML = "Queen"
    choices.appendChild(queen)

    const rook = document.createElement('button') 
    rook.innerHTML = "Rook"
    choices.appendChild(rook)

    const knight = document.createElement('button') 
    knight.innerHTML = "Knight"
    choices.appendChild(knight)

    const bishop = document.createElement('button') 
    bishop.innerHTML = "Bishop"
    choices.appendChild(bishop)

    // create an object of the piece user wants and render it at the pawn's position

    queen.addEventListener('click', () => {
        sendConversion('queen', choices, final, finalRow, finalCol)
        pawnToQueen(choices, final, finalRow, finalCol)
    }) 

    rook.addEventListener('click', () => {
        sendConversion('rook', choices, final, finalRow, finalCol)
        pawnToRook(choices, final, finalRow, finalCol)
    }) 

    knight.addEventListener('click', () => {
        sendConversion('knight', choices, final, finalRow, finalCol)
        pawnToKnight(choices, final, finalRow, finalCol)
    }) 

    bishop.addEventListener('click', () => {
        sendConversion('bishop', choices, final, finalRow, finalCol)
        pawnToBishop(choices, final, finalRow, finalCol)
    }) 
}