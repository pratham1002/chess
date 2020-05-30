class rook {
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
        console.log("calculating moves for ", this)
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
        
        console.log(moves)
        return moves
    }
}