const gartic = require('./gartic')

const index = (typeObjt) => {
    if (typeObjt === 'gartic'){
        return new gartic();
    }

    return false

}

module.exports = index