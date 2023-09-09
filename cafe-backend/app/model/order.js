const mongoose = require("mongoose")

const Schema = mongoose.Schema

const orderSchema = new Schema ({
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
    }
})

const Order = mongoose.model("Order" , orderSchema)

module.exports = Order