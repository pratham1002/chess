function findMoves(id) {
    console.log('currently ' + turn + ' to play, i am ' + me)
    if (me === turn) {
        console.log('sending the clicked id')
        socket.emit('play', username, id)
    }
    const id_data = id.split("")
    const row = id_data[0]
    const col = id_data[1]
    const cell = board[row][col]

    if (cell.occupiedBy != null && cell.occupiedBy.color == turn) {
        deleteHighlights()
        highlightLegalMoves(cell.occupiedBy.movements, id)        
    }
}