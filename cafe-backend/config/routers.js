const express = require('express')
const orderCltr = require('../app/controllers/orderCltr')
const addCltr = require('../app/controllers/addCltr')
const router = express.Router()

router.get('/api/orders' , orderCltr.list)
router.get('/api/orders/:search' , orderCltr.filter)
router.get('/api/ordersAdd' , addCltr.getid)
router.get('/api/ordersChecked/:id' , addCltr.checked)
router.get('/api/ordersRadio/:value' , orderCltr.radio)
router.post('/api/ordersPost' , addCltr.create)

module.exports = router