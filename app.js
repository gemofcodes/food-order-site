const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const foodRoutes = require('./routes/foodRoutes')
const orderRoutes = require('./routes/orderRoutes')
const dbURI = require('./credentials')

//connect to MongoDB
// const dbURI = 'mongodb+srv://test:password@cluster0.tjbu1.mongodb.net/dbname?retryWrites=true&w=majority'
// const dbURI = 'mongodb+srv://test:<password>@cluster0.tjbu1.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('connected to db'))
  .then((result) => app.listen(3005, () => {
    console.log(`Server is running on http://localhost:${3005}`)
  }))
  .catch((err) => console.log(err))

const app = express()

// register view engine
app.set('view engine', 'ejs')

// middleware and static files
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true})) 
app.use(express.static('public'));

// Getting n setting data
app.get('/', (req, res) => {  
  res.redirect('/foods')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'})
})

app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// Food routes
app.use(foodRoutes)
app.use(orderRoutes)
// app.use('/foods', foodRoutes)
// app.use('/orders', orderRoutes)


app.use((req, res) => {
  res.status(404).render('404', { title: '404'})
})


