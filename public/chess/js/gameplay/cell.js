class cell {
    constructor(color, row, col) {

        this.color = color      // boolean where true gives green and false gives white
        this.row = row          // the row number of the cell
        this.col = col          // the column number of the cell
        this.occupiedBy = null  // it stores the piece which occupies the location acting as kind of a one to one field
    }

    set occupancy(piece) {
        this.occupiedBy = piece
    }
}