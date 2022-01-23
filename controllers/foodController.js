// food_index, food_details, food_create_get, food_create_post, food_delete

const Food = require('../models/food')


const food_index = (req, res) => {
  Food.find().sort({ createdAt: -1 })
    .then((result) =>{
      res.render('foods/index', { title: 'All foods', foods: result})
    })
    .catch((err) => {
      console.log(err)
    })
}

const food_details = (req, res) => {
  const id = req.params.id
  // console.log(id)
  Food.findById(id)
    .then((result) =>{
      res.render('foods/details', { title: 'Food Details', food: result})
    })
    .catch((err) => {
      // console.log(err)
      res.status(404).render('404', { title: 'Food not found'})
    })
}

const food_create_get = (req, res) => {
  res.render('foods/create', { title: 'Create new food'})
}

const food_create_post = (req, res) => {
  // console.log(req.body)
  const food = new Food(req.body)
  food.save()
    .then((result) =>{
      res.redirect('/foods')
    })
    .catch((err) => {
      console.log(err)
    })
}

const food_delete = (req, res) => {
  const id = req.params.id
  // console.log(id)
  Food.findByIdAndDelete(id)
    .then((result) =>{
      res.json({ redirect: '/foods'})
    })
    .catch((err) => {
      console.log(err)
    })
}


module.exports = {
  food_index,
  food_details, 
  food_create_get, 
  food_create_post, 
  food_delete
}