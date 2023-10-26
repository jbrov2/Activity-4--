const router = require('express').Router()


router.get('/', (req,res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Kansas Fried Donuts',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Donuts, Chicken',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', {places})
})

// //GET ?Palces
// app.get('/', (req, res)=>{
//     res.render('places/index')
// })

module.exports = router