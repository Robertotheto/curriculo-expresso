const express = require('express')
const createError = require('http-errors')
const port = 3000
const app = express()
const indexRoute = require('./routes/index')
const curriculoRoute = require('./routes/curriculo')
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

//Setup view engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',indexRoute)
app.get('/curriculo',curriculoRoute)

app.use((req,res,next) => {
    next(createError(404))
})
app.use((err,req,res,next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err:{}

    res.status(err.status || 500)
    res.render('error')
})

app.listen(port,err =>{
    console.log(`Server is listening on ${port}`)
})