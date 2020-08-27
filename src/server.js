const express = require('express')
const server = express(); //Express is a function

const { pageLanding, pageGiveClasses, pageStudy, saveClasses} =  require('./pages')

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})



//Setting statics files (css, img, scripts)
server
//Receiving datas from 'req.body'
.use(express.urlencoded({extended: true}))
.use(express.static("public"))

    //Setting route
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .listen(5500);



