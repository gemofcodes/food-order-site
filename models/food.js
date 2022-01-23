const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredient: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Food = mongoose.model('Foods', foodSchema)
module.exports = Food