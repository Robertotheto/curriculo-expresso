const express = require('express')
const port = 3000
const app = express()
const path = require('path')

//Setup view engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',function(req,res,next){
    res.render('index',{
        title:'Meu primeiro servidor com Express',
        version: '0.0.0'
    })
})
app.listen(port,err =>{
    console.log(`Server is listening on ${port}`)
})