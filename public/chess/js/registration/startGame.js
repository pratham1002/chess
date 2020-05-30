function startGame() {
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