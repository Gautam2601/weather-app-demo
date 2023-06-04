const express = require('express');
const hbs = require('hbs')

const app = express();

const path = require('path')

const PublicPath = path.join(__dirname, '../public');

const UpdatedviewsPath = path.join(__dirname, '../templates/views')

const PartialsPath = path.join(__dirname, '../templates/partials');
app.set('view engine', 'hbs');

app.set('views', UpdatedviewsPath);

app.use(express.static(PublicPath));

hbs.registerPartials(PartialsPath);

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather Application',
        name: 'Sarvesh'
    })                                  //this render will give the views directory to the webserver and this 'index' indicates ki views directory ke andar index vaala page render karo
})

app.get('/About', (req, res) =>{
    res.render('About', {
        title: 'About Me',
        name: 'Sarvesh'
    })
})

app.get('/Help', (req, res)=>{
    res.render('help',{
        title: 'Help Page',
        name: 'Sarvesh'
    })
})

app.get('/Weather', (req, res)=>{
    res.send({
        Address: "Bihar Sharif",
        Forecast: "People are cringe here"
    });
})
app.get('/help/*', (req, res)=>{
    res.render('404', {
        ErrorMsg: "Help Article Not Found"
    })
})
app.get('*', (req, res)=>{
    res.render('404', {
        ErrorMsg: "Page not found"
    });
})
app.listen(3000, ()=>{
    console.log('The server is working');
})