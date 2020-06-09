### Classic Chess in Vanilla JS made online multiplayer using socket.io

The backend for the game is built upon from the checkmate repository. 

#### TODO
- remove illegal moves which cause allow the king to be killed in the next move

### Issue
- when board is copied while trying to caculate illegal moves, instead of a new array of null objects being created, the board gets replicated before it is intended.