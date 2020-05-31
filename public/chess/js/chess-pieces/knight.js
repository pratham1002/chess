class Knight {
    constructor(location, color) {
        this.location = location
        this.color = color
        this.location.occupancy = this
        this.name = color + "knight"
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

        // the knight's movement is bidirectional so no need of separate cases for black and white
        const row = this.location.row
        const col = this.location.col
        const selfColor = this.color
        let cur_row, cur_col
        // from any location on the board, the knight can move to a maximum of 8 places
        console.log('main board before calculating moves for',selfColor, 'knight:', board)
        // 1
        cur_row = row - 2
        cur_col = col - 1
        addMove()

        // 2
        cur_row = row - 2
        cur_col = col + 1
        addMove()

        // 3
        cur_row = row + 2
        cur_col = col - 1
        addMove()

        // 4
        cur_row = row + 2
        cur_col = col + 1
        addMove()

        // 5
        cur_row = row - 1
        cur_col = col + 2
        addMove()

        // 6
        cur_row = row - 1
        cur_col = col - 2
        addMove()

        // 7
        cur_row = row + 1
        cur_col = col - 2
        addMove()

        // 8
        cur_row = row + 1
        cur_col = col + 2
        addMove()

        function addMove() {
            if (cur_row >= 0 && cur_col >= 0 && cur_row < 8 && cur_col < 8) {
                console.log('turn =', turn, 'selfColor =', selfColor)
                if (selfColor === turn) {
                    const cell = board[cur_row][cur_col]
                    // console.log('does move cause a check = ', moveNewBoard(row, col, cur_row, cur_col))
                    if (cell.occupiedBy == null && !moveNewBoard(row, col, cur_row, cur_col)) {
                        moves.push(cell)
                    }
                    else if (cell.occupiedBy.color != selfColor && !moveNewBoard(row, col, cur_row, cur_col)) {
                        moves.push(cell)
                    }
                }
                if (selfColor != turn) {
                    const cell = board[cur_row][cur_col]

                    if (cell.occupiedBy == null) {
                        moves.push(cell)
                    }
                    else if (cell.occupiedBy.color != selfColor) {
                        moves.push(cell)
                    }
                }
            }
        }

        console.log(moves)

        console.log('main board after calculating moves for', selfColor, 'knight:', board)
        return moves
    }
} 