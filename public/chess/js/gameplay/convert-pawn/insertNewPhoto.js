function insertNewPhoto(finalRow, finalCol, final) {
    console.log('inserting new photo')
    const piece_photo = document.createElement("IMG");
    piece_photo.setAttribute("src", "images/" + board[finalRow][finalCol].occupiedBy.name + ".jpg")
    piece_photo.setAttribute("alt", board[finalRow][finalCol].occupiedBy.color)
    piece_photo.classList.add("piecePhoto")
    document.getElementById(final).appendChild(piece_photo)
}