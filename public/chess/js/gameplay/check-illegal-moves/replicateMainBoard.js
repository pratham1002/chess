function replicateMainBoard() {
    cur_board = []
    // initialising the board
    for (var i = 0; i < 8; i++) {
        cur_board.push([])
        for (var j = 0; j < 8; j++) {
            if (i % 2 == 0) {
                cur_box = new cell(!!(j % 2), i, j)
                cur_board[i].push(cur_box)
            }
            else {
                cur_box = new cell(!(j % 2), i, j)
                cur_board[i].push(cur_box)
            }
            
        }
    }

    board.forEach((row) => {
        row.forEach((cell) => {
            // check if the cell is occupied on the main board
            if (cell.occupiedBy != null) {
                // check the tyoe of the occupying piece
                const piece = cell.occupiedBy
                const pieceType = piece.constructor.name

                if (pieceType == 'Pawn') {
                    new_pawn = new Pawn(cell, piece.color)
                    cur_board[cell.row][cell.col].occupancy = new_pawn
                    cur_board[cell.row][cell.col].occupiedBy.moved = board[cell.row][cell.col].occupiedBy.hasMoved
                }

                if (pieceType == 'Rook') {
                    new_rook = new Rook(cell, piece.color)
                    cur_board[cell.row][cell.col].occupancy = new_rook
                    cur_board[cell.row][cell.col].occupiedBy.moved = board[cell.row][cell.col].occupiedBy.hasMoved
                }

                if (pieceType == 'Knight') {
                    new_knight = new Knight(cell, piece.color)
                    cur_board[cell.row][cell.col].occupancy = new_knight
                    cur_board[cell.row][cell.col].occupiedBy.moved = board[cell.row][cell.col].occupiedBy.hasMoved
                }

                if (pieceType == 'Bishop') {
                    new_bishop = new Bishop(cell, piece.color)
                    cur_board[cell.row][cell.col].occupancy = new_bishop
                    cur_board[cell.row][cell.col].occupiedBy.moved = board[cell.row][cell.col].occupiedBy.hasMoved
                }

                if (pieceType == 'Queen') {
                    new_queen = new Queen(cell, piece.color)
                    cur_board[cell.row][cell.col].occupancy = new_queen
                    cur_board[cell.row][cell.col].occupiedBy.moved = board[cell.row][cell.col].occupiedBy.hasMoved
                }

                if (pieceType == 'King') {
                    new_king = new King(cell, piece.color)
                    cur_board[cell.row][cell.col].occupancy = new_king
                    cur_board[cell.row][cell.col].occupiedBy.moved = board[cell.row][cell.col].occupiedBy.hasMoved
                }
            }
        })
    }) 

    return cur_board
}