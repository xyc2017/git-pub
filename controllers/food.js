const express=require('express')
const food=require('../models/food')
const router = express.Router()

router.get('/', (req, res)=>{
    
    res.render('food_index.ejs',{food}) 
})


router.get('/food/:id', (req, res)=>{
    res.render('show.ejs', {food: (req.params.id)})
})

module.exports =router