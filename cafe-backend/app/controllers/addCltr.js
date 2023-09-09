const Add = require("../model/add")

const addCltr = {}

addCltr.getid = (req , res) => {
    Add.find()
        .then((order)=>{
            console.log("Order" ,order)
            res.json(order)
        })
        .catch((err)=>{
            res.json(err)
        })
}

addCltr.create = (req , res) => {
    const body = req.body
    const add = new Add(body)
    add.save()
        .then((order)=>{
            res.json({order:order , message: "Order Added!!!"})
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

addCltr.checked = (req , res) => {
    const id = req.params.id
    console.log(id)
    Add.findOne({_id : id})
        .then((order)=>{
            res.json({order:order , message : `The ${order.name} order is ready!!!`})
            console.log(order)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = addCltr