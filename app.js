var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(bodyParser.json())          // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }))

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/',(req,res)=>{
    res.redirect('/index')
})

app.get('/index',(req,res)=>{
    res.render('index.ejs')
})

app.post('/play', (req, res) => {
    res.render('player.ejs', {data:req.body})
})

app.use((req, res) => {
    res.render('index.ejs')
})

var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server live at port: ${port}`)
})