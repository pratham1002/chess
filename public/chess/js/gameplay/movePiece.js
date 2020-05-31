function movePiece(initial, final) {
    if (me === turn) {
        console.log('sending the move')
        socket.emit('move', username, initial, final)
    }

    deleteHighlights()
    console.log(initial + ' to ' + final)

    if (initial < 10) {
        initial = "0" + initial.toString()
    }

    if (final < 10) {
        final = "0" + final.toString()
    }

    const initialIdData = initial.toString().split("")
    const initialRow = initialIdData[0]
    const initialCol = initialIdData[1]

    const finalIdData = final.toString().split("")
    const finalRow = finalIdData[0]
    const finalCol = finalIdData[1]

    if (board[finalRow][finalCol].occupiedBy != null) {
        // check for castling
        if (board[initialRow][initialCol].occupiedBy.color === board[finalRow][finalCol].occupiedBy.color) {
            // execute castling here
            return castle(initialCol, finalCol, finalRow)
        }
        // check if king if being killed
        else if (board[finalRow][finalCol].occupiedBy.name == "blackking") {
            window.alert("white wins")
            window.location.reload()
        }
        else if (board[finalRow][finalCol].occupiedBy.name == "whiteking") {
            window.alert("black wins")
            window.location.reload()
        }
    }

    // check for pawn being moved to last row
    if (board[initialRow][initialCol].occupiedBy.name.search('pawn') != -1) {
        console.log('checking for pawn being moved to last row')
        if (finalRow == 0 || finalRow == 7) {
            return convertPawn(initialRow, initialCol, finalRow, finalCol)
        }
    }

    board[initialRow][initialCol].occupiedBy.moved = true
    board[finalRow][finalCol].occupancy = board[initialRow][initialCol].occupiedBy
    board[initialRow][initialCol].occupancy = null
    board[finalRow][finalCol].occupiedBy.moveLocation = board[finalRow][finalCol]
    
    document.getElementById(final).innerHTML = document.getElementById(initial).innerHTML
    document.getElementById(initial).innerHTML = ""

    changeTurn()

    console.log(turn, 'in check = ', inCheck(board))

    preCalculateMoves()
}