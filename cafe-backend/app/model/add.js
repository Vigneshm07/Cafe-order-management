const mongoose = require("mongoose")

const Schema = mongoose.Schema

const addSchema = new Schema ({
    name : {
        type : String ,
        required : true
    } ,
    type : {
        type : String ,
        required : true
    } ,
    price : {
        type : Number ,
        required : true
    },
    itemId : {
        type : String ,
        required : true
    }
})

const Add = mongoose.model("Add" , addSchema)

module.exports = Add