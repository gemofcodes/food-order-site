const express = require('express')
const router = express.Router()
const foodController = require('../controllers/foodController')


router.get('/foods/', foodController.food_index)

router.post('/foods/', foodController.food_create_post)

router.get('/foods/create', foodController.food_create_get)

router.get('/foods/:id', foodController.food_details)

router.delete('/foods/:id', foodController.food_delete)


module.exports = router;