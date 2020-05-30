function startGame() {
    // delete the form
    document.getElementById('registration').parentElement.removeChild(document.getElementById('registration'))

    initialiseBoard()
    renderBoard()
    spawnPieces("black")
    spawnPieces("white")
    renderPieces()
    preCalculateMoves()
    console.log("Playing as " + me)

    clickManager()
    
    createInfo()
}