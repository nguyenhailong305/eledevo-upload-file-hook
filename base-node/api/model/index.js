const mongoose  = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name : {
        type : String
    },
    img : {
        type : Array
    },
    time :{
        type : String
    }
})

module.exports = mongoose.model('text' , ItemSchema)