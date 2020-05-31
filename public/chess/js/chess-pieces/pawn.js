class Pawn {
    constructor(location, color) {
        this.location = location
        this.color = color
        this.location.occupancy = this
        this.name = color + "pawn"
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

        // current location
        const row = this.location.row
        const col = this.location.col

        // for black pieces the pawns start at row 6
        if (this.color === "black") {

            // normal move one forward
            if (board[row - 1][col].occupiedBy === null) {
                moves.push(board[row - 1][col])
            }
            // move involving a kill to the left
            if (col != 0 && board[row - 1][col - 1].occupiedBy != null && board[row - 1][col - 1].occupiedBy.color === "white") {
                moves.push(board[row - 1][col - 1])
            }
            // move involving a kill to the right
            if (col != 7 && board[row - 1][col + 1].occupiedBy != null && board[row - 1][col + 1].occupiedBy.color === "white") {
                moves.push(board[row - 1][col + 1])
            }
            // the first move allowing 2 places forward
            if (this.hasMoved === false && board[row - 1][col].occupiedBy === null && board[row - 2][col].occupiedBy === null) {
                moves.push(board[row - 2][col])
            }
        }

        // for black pieces the pawnss start at row 1
        else if (this.color === "white") {
            // current location
            const row = this.location.row
            const col = this.location.col

            // normal move one forward
            if (board[row + 1][col].occupiedBy === null) {
                moves.push(board[row + 1][col])
            }
            // move involving a kill to the left
            if (col != 0 && board[row + 1][col - 1].occupiedBy != null && board[row + 1][col - 1].occupiedBy.color === "black") {
                moves.push(board[row + 1][col - 1])
            }
            // move involving a kill to the right
            if (col != 7 && board[row + 1][col + 1].occupiedBy != null && board[row + 1][col + 1].occupiedBy.color === "black") {
                moves.push(board[row + 1][col + 1])
            }
            // the first move allowing 2 places forward
            if (this.hasMoved === false && board[row + 1][col].occupiedBy === null && board[row + 2][col].occupiedBy === null) {
                moves.push(board[row + 2][col])
            }
        }

        console.log(moves)
        return moves
    }
}