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
        // check if king if being killed
        if (board[finalRow][finalCol].occupiedBy.name == "blackking") {
            window.alert("white wins")
            window.location.reload()
        }
        if (board[finalRow][finalCol].occupiedBy.name == "whiteking") {
            window.alert("black wins")
            window.location.reload()
        }
    }

    board[initialRow][initialCol].occupiedBy.moved = true
    board[finalRow][finalCol].occupancy = board[initialRow][initialCol].occupiedBy
    board[initialRow][initialCol].occupancy = null
    board[finalRow][finalCol].occupiedBy.moveLocation = board[finalRow][finalCol]
    
    document.getElementById(final).innerHTML = document.getElementById(initial).innerHTML
    document.getElementById(initial).innerHTML = ""

    if (turn === "white") {
        turn = "black"
    }
    else {
        turn = "white"
    }

    if (me != turn) {
        freezeClic = true
        document.addEventListener("click", freezeClicFn, true);
    }
    else {
        freezeClic = false
    }

    function freezeClicFn(e) {
        if (freezeClic) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    document.getElementById('turn').innerHTML = "Currently " + turn + " to play"
    preCalculateMoves()
}