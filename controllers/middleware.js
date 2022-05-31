const middleware = {
    existCommandInUser(command){
        return typeof(this.user[command]) === 'function' ? true : false
    },

    existCommandInRoom(command){
        return typeof(this.room[command]) === 'function' ? true : false
    },
    
    existCommandInGame(command) {
        return typeof(this.room.game[command]) === 'function' ? true : false
    },
}

module.exports = middleware