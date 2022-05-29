const games = require('../games/index')

class rooms {
    constructor() {
        this.rooms = {}
        this.games = {}
        }

    cacheGame(game,host) {

    }

    createRoom(game,host) {
        var runGame = games(game)
        if (!runGame) {
            return false
        } else {
            this.rooms[host] = {game,runGame}
            this.games[game] = runGame
            return runGame
        }
    }

    joinRoom(host) {
       return host in this.rooms
    }

    static deleteRoom(game,host) {

    }


}

const teste = new rooms()

teste.createRoom('gartic','asda')
console.log(teste.rooms)
console.log(teste.games)
teste.joinRoom('asda')
