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
app.get('/curriculo',function(req,res,next){
    res.render('curriculo',{
        title: 'Meu Curriculo',
        name: 'Roberto dos Santos Filho',
        profession: 'Apreendendo Programação Web',
        description: 'Estudando linguagem de programação web, como Html, Css, JavaScript, NodeJs, MongoDb, ReactJs e ReactNative.',
        experience:[
            {
                company: 'Curso Sistema de Informação',
                office: 'Desenvolvimento FullStack',
                description:'Curso de Programação Web'
            },
            {
                company:'Youtube',
                office: 'Auto Apreendizado',
                description:'Assistir videos para apreender e ter conhecimento de uma determinada linguagem.'
            }
        ],
        education:[
            {
                institution: 'Faculdade Unemat',
                description: '3° semestre do curso superior de sistema de informação.'
            }
        ],
        skills:['Backend','Frontend','Banco de Dados','Mobile']
    })
})
app.listen(port,err =>{
    console.log(`Server is listening on ${port}`)
})