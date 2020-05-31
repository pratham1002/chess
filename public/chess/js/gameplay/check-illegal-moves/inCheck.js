function inCheck(cur_board) {
    // this function will take in a board and check if it has a check condition
    // calculate all possible moves by the opponent and store them to a separate board
    // make a new board which is an exact copy of the current board
    // on the new board calculate all possible moves of the the opponent (who currently does not have turn)
    // if any of the moves corresponds to a check return true else return false
    calculateMoves(cur_board)
    // claculateMoves stores all the moves now which can be parsed to find the check condtion
    let kingUnderThreat = turn + 'king'
    let flag = false
    // now parse the board
    cur_board.forEach((row) => {
        row.forEach((cell) => {
            if (cell.occupiedBy != null && cell.occupiedBy.color != turn) {
                let moves = cell.occupiedBy.movements
                moves.forEach((move) => {
                    if (move.occupiedBy != null && move.occupiedBy.name == kingUnderThreat) {
                        flag = true
                    }  
                })
            }
        })
    })

    return flag
}