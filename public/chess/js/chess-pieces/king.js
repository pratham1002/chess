class king {
    constructor(location, color) {
        this.location = location
        this.color = color
        this.location.occupancy = this
        this.name = color + "king"
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

        // the king's movement is bidirectional so no need of separate cases for black and white
        const row = this.location.row
        const col = this.location.col
        const selfColor = this.color
        let cur_row, cur_col
        // from any location on the board, the knight can move to a maximum of 8 places
        
        // 1: top left
        cur_row = row - 1
        cur_col = col - 1
        addMove()

        // 2: top right
        cur_row = row - 1
        cur_col = col + 1
        addMove()

        // 3: top
        cur_row = row - 1
        cur_col = col
        addMove()

        // 4: left
        cur_row = row
        cur_col = col - 1
        addMove()

        // 5: right
        cur_row = row
        cur_col = col + 1
        addMove()

        // 6: lower left
        cur_row = row + 1
        cur_col = col - 1
        addMove()

        // 7: lower right
        cur_row = row + 1
        cur_col = col + 1
        addMove()

        // 8: lower
        cur_row = row + 1
        cur_col = col
        addMove()

        function addMove() {
            if (cur_row >= 0 && cur_col >= 0 && cur_row < 8 && cur_col < 8) {
                const cell = board[cur_row][cur_col]

                if (cell.occupiedBy == null) {
                    moves.push(cell)
                }
                else if (cell.occupiedBy.color != selfColor) {
                    moves.push(cell)
                }
            }
        }

        console.log(moves)
        return moves
    }
}