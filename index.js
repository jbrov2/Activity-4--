require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//BEGINNING MIDDLEWARE SECTION
//adding jsx

app.set('views',__dirname+'/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//adding body parser
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))

//ENDING MIDDLEWARE SECTION



//adding controller
app.use('/places', require('./controllers/places'))


app.get('/',(req,res) => {
    res.render('home')
})


//Wild card page make always ensure it ends up on the bottom.
app.get('*',(req,res) =>{
    res.render('error404')
})

app.listen(process.env.PORT)