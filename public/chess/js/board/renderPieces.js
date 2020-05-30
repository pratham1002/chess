function renderPieces() {
    pieces.forEach((color) => {
        color.forEach((piece) => {
            const piece_id = piece.location.row.toString() + piece.location.col.toString()
            const $board_piece = document.getElementById(piece_id)
            const piece_photo = document.createElement("IMG");
            piece_photo.setAttribute("src", "images/" + piece.name + ".jpg")
            piece_photo.setAttribute("alt", piece.name)
            piece_photo.classList.add("piecePhoto")
            $board_piece.appendChild(piece_photo)
        })
    })
}