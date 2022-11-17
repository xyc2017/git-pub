const express=require('express')
const drinks=require('../models/drinks')
const router = express.Router()


function capitalize(capDrink){
        // split up the drink names at each space
        let words=capDrink.split(" ")
        // on each pass, capitalize the first letter of each word
        for (let i=0; i<words.length; i++){
        // each word that was split needs to be capitalized 
        // first select a word then assign it a capitalize modification

            words[i]=words[i][0].toUpperCase()+words[i].substr(1).toLowerCase()
        }
        // join all the words back into a sentence and return as a result
        return words.join(" ")  
}
function bob(){
    return "bob"
}
router.get('/', (req, res)=>{

    res.render('index.ejs',
    {
        drinks: drinks, 
        // first drinks is the drinks in the EJS, second drinks refers to the drinks array
        capitalize, 
        bob
    }) 
})
router.get('/:id', (req, res)=>{
    res.render('show.ejs', {drink: drinks[req.params.id]})
})

module.exports =router