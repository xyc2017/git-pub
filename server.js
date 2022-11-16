const { response } = require('express')
const express=require('express')
const app=express()
const PORT=3002
const drinks=require('./models/drinks')
const drinkRoute=require('./controllers/drinks')
const foodRoute=require('./controllers/food')
app.set('view engine', 'ejs')

app.use('/drinks', drinkRoute) //tell app to use the route
app.use('/food',foodRoute)
 

app.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`)
})