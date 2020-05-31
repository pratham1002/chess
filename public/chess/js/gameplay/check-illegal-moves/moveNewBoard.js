function moveNewBoard(initialRow, initialCol, finalRow, finalCol) {
    let cur_board = replicateMainBoard()

    if (cur_board[finalRow][finalCol].occupiedBy != null) {
        // check if king if being killed
        if (board[finalRow][finalCol].occupiedBy.name == "blackking") {
            return true
        }
        else if (board[finalRow][finalCol].occupiedBy.name == "whiteking") {
            return true
        }
    }

    console.log('initialRow =', initialRow, 'initial Col =', initialCol, 'finalRow =', finalRow, 'finalCol', finalCol, 'occupied by =', cur_board[initialRow][initialCol].occupiedBy)

    cur_board[initialRow][initialCol].occupiedBy.moved = true
    cur_board[finalRow][finalCol].occupancy = cur_board[initialRow][initialCol].occupiedBy
    cur_board[initialRow][initialCol].occupancy = null
    cur_board[finalRow][finalCol].occupiedBy.moveLocation = cur_board[finalRow][finalCol]

    return inCheck(cur_board)
}