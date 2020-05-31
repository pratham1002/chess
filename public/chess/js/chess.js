const socket = io()

var board = []
var pieces = [[], []]
var turn = "white"
var me
var freezeClic = false
var username

const $myDetails = document.getElementById('myDetails')
const $turn = document.getElementById('turn')
/*
* access the pieces as: 
*
* 0 0 : black rook 1
* 0 1 : black knight 1
* 0 2 : black bishop 1
* 0 3 : black queen 
* 0 4 : black king
* 0 5 : black bishop 2
* 0 6 : black knight 2
* 0 7 : black rook 2
* 0 8 : black pawn 1
* 0 9 : black pawn 2
* 0 10 : black pawn 3
* 0 11 : black pawn 4
* 0 12 : black pawn 5
* 0 13 : black pawn 6
* 0 14 : black pawn 7
* 0 15 : black pawn 8
*
* 1 0 : white rook 1
* 1 1 : white knight 1
* 1 2 : white bishop 1
* 1 3 : white queen 
* 1 4 : white king
* 1 5 : white bishop 2
* 1 6 : white knight 2
* 1 7 : white rook 2
* 1 8 : white pawn 1
* 1 9 : white pawn 2
* 1 10 : white pawn 3
* 1 11 : white pawn 4
* 1 12 : white pawn 5
* 1 13 : white pawn 6
* 1 14 : white pawn 7
* 1 15 : white pawn 8
*/

document.addEventListener("DOMContentLoaded", () => {
    createRegistrationForm()
    joinRoom()
})