const room = require('./rooms')

var index = {
    room: new room,

    existCommand(command){
        return typeof(this.room[command]) === 'function' ? true : false
    },
    
    existCommandInGame(command) {
        return typeof(this.room.game[command]) === 'function' ? true : false
    }

}

module.exports = index


