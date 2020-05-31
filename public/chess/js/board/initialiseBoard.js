function initialiseBoard() {
    // initialising the board
    for (var i = 0; i < 8; i++) {
        board.push([])
        for (var j = 0; j < 8; j++) {
            if (i % 2 == 0) {
                box = new cell(!!(j % 2), i, j)
                board[i].push(box)
            }
            else {
                box = new cell(!(j % 2), i, j)
                board[i].push(box)
            }
            
        }
    }
}