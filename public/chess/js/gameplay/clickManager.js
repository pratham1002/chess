function clickManager() {
    if (me != turn) {
        freezeClic = true
        document.addEventListener("click", freezeClick, true);
    }
    else {
        freezeClic = false
    }
}