class Rook {
    constructor(location, color) {
        this.location = location
        this.color = color
        this.location.occupancy = this
        this.name = color + "rook"
        this.hasMoved = false
        this.movements = []
    }

    set moved(val) {
        this.hasMoved = val
    }

    set moveLocation(loc) {
        this.location = loc
    }

    set available_moves(movements) {
        this.movements = movements
    }

    legalMoves() {
        // console.log("calculating moves for ", this)
        let moves = []

        // the rook's movement is bidirectional so no need of separate cases for black and white
        const row = this.location.row
        const col = this.location.col
        const selfColor = this.color
        let cur_row, cur_col

        // vertical upwards movement
        cur_row = row
        cur_col = col

        while (--cur_row >= 0 && addMove());

        // vertical downwards movement
        cur_row = row
        cur_col = col

        while (++cur_row < 8 && addMove());

        // horizontal movement left
        cur_row = row
        cur_col = col

        while (--cur_col >= 0 && addMove()); 

        // horizontal movement right
        cur_row = row
        cur_col = col

        while (++cur_col < 8 && addMove());

        // check for castling, rook must not have moved
        if (this.hasMoved === false) {
            // console.log('checking for castling from rook')
            // the king must not have moved
            if (board[row][4].occupiedBy != null && board[row][4].occupiedBy.hasMoved === false) {
                // check for king side castling
                if (col > 4) {
                    // console.log('checking for king side castling from rook')
                    if (board[row][5].occupiedBy == null && board[row][6].occupiedBy == null) {
                        console.log('king side castling from rook possible')
                        moves.push(board[row][4])
                    }
                }
                // check for queen side castling
                
                if (col < 4) {
                    /// console.log('checking for queen side castling from rook')
                    if (board[row][1].occupiedBy == null && board[row][2].occupiedBy == null && board[row][3].occupiedBy == null) {
                        console.log('king side castling from rook possible')
                        moves.push(board[row][4])
                    }
                }
            }
        }

        function addMove() {
            const cell = board[cur_row][cur_col]
            if (cell.occupiedBy == null) {
                moves.push(cell)
                return true
            }
            else if (cell.occupiedBy.color != selfColor) {
                moves.push(cell)
                return false
            }
            else {
                return false
            }
        }
        
        // console.log(moves)
        return moves
    }
}