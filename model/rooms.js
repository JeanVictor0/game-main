const games = require('../games/index')

class rooms {
    constructor() {
        this.rooms = {}
        this.games = {}
        }

    cacheGame(game,host) {
        return this.games
    }

    createRoom(game,host) {
        var runGame = games(game)
        if (!runGame) {
            return false
        } else {
            this.rooms[host] = this.rooms.hasOwnProperty(host) ? this.rooms[host] : {game,runGame}
            this.games[game] = this.games.hasOwnProperty(game) ? this.games[game] : runGame
            return !this.rooms.hasOwnProperty(host)
        }
    }

    joinRoom(host,user) {
       return host in this.rooms ? this.rooms[host].users = [...[user]] : false
    }

    exitRoom(host, user){
        try {
            var newUsers = this.rooms[host].users.indexOf(user)
            if (newUsers === -1){
                return false
            }
            this.rooms[host].users = this.rooms[host].users.splice(newUsers) 

        } catch (err) { 
            return err
        }
    }

    useCommand(key,command = {}){

    }

    showRooms(){
        return this.rooms
    }

    deleteRoom(game,host) {
        // Ainda verei se usarei admin ou sera por votação
    }


}

module.exports = rooms


