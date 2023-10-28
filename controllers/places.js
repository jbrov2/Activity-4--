const router = require('express').Router()


router.get('/', (req,res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/gurpartap-sandhu-nuAOmcjs3ZQ-unsplash.jpg'
      }, {
        name: 'Kansas Fried Donuts',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Donuts, Chicken',
        pic: '/images/goku.png'
      }]
      
    res.render('places/index', {places})
})

// //GET ?Palces
// app.get('/', (req, res)=>{
//     res.render('places/index')
// })

module.exports = router