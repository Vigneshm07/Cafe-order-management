const Order = require("../model/order")

const orderCltr = {}

orderCltr.list = (req , res) => {
    Order.find()
        .then((order)=>{
            res.json(order)
        })
        .catch((err)=>{
            res.json(err)
        })
}

orderCltr.filter = (req , res) =>{
    const search = req.params.search
    Order.find()
    .then((order)=>{
            const name = order.filter(ele=>ele.name.toLocaleLowerCase().includes(search))
            if(name.length > 0){
                res.json(name)
                //console.log(name)
            } else {
                res.json({
                    message : "This item is currently unavailable!!"
            })
        }       
        })
    .catch((err)=>{
        res.json(err.message)
    })
}


orderCltr.radio = (req , res) =>{
    const value = req.params.value
    Order.find()
    .then((order)=>{
        const name = order.filter(ele=>ele.type.includes(value))
            res.json(name)
        })
    .catch((err)=>{
        res.json(err.message)
    })
}

module.exports = orderCltr