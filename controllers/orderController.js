// order_index, order_details, order_create_get, order_create_post, order_delete

const Order = require('../models/order')


const order_index = (req, res) => {
  Order.find().sort({ createdAt: -1 })
    .then((result) =>{
      res.render('orders/index', { title: 'All orders', orders: result})
    })
    .catch((err) => {
      console.log(err)
    })
}

const order_details = (req, res) => {
  const id = req.params.id
  // console.log(id)
  Order.findById(id)
    .then((result) =>{
      res.render('orders/details', { title: 'Order Details', order: result})
    })
    .catch((err) => {
      // console.log(err)
      res.status(404).render('404', { title: 'Order not found'})
    })
}

const order_create_get = (req, res) => {
  res.render('orders/create', { title: 'Create new order'})
}

const order_create_post = (req, res) => {
  // console.log(req.body)
  const order = new Order(req.body)
  order.save()
    .then((result) =>{
      res.redirect('/orders')
    })
    .catch((err) => {
      console.log(err)
    })
}

const order_delete = (req, res) => {
  const id = req.params.id
  // console.log(id)
  Order.findByIdAndDelete(id)
    .then((result) =>{
      res.json({ redirect: '/orders'})
    })
    .catch((err) => {
      console.log(err)
    })
}


module.exports = {
  order_index,
  order_details, 
  order_create_get, 
  order_create_post, 
  order_delete
}