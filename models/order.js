const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Order = mongoose.model('Orders', orderSchema)
module.exports = Order