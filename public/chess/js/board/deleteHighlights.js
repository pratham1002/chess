function deleteHighlights() {
    document.querySelectorAll('.box').forEach((box) => {
        box.setAttribute("onclick", "findMoves(this.id)")
    })
    document.querySelectorAll('.dot').forEach((dot) => {
        dot.remove()
    })
}