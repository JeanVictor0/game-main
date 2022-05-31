const model = require('../model/index')
const middleware = require('./middleware')

const constroller = {
    useCommandInRoom(key){
        if (middleware.existCommandInRoom(key)){
        
        } else {
            return 'O comando que voce usou nao existe ou estar incorreto'
        }
    },

    useCommandInUsers(key){
        if (middleware.existCommandInUser(key)){

        } else {
            return 'O comando que voce usou nao existe ou estar incorreto'
        }
    },

    useCommandInGame(){
        if (middleware.existCommandInGame(key)){
            
        } else {
            return 'O comando que voce usou nao existe ou estar incorreto'
        }
    }
}

