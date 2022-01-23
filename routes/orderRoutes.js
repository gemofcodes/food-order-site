const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')


router.get('/orders/', orderController.order_index)

router.post('/orders/', orderController.order_create_post)

router.get('/orders/create', orderController.order_create_get)

router.get('/orders/:id', orderController.order_details)

router.delete('/orders/:id', orderController.order_delete)


module.exports = router;