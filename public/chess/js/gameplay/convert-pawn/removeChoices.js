function removeChoices(choices) {
    if (me != turn) {
        return
    }
    console.log('removing choices')
    choices.parentElement.removeChild(choices)
}