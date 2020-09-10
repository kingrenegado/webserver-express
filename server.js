const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

//Express HBS
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
 
    res.render('home',{
        nombre: 'Enrique Lara Guerrero'
    });
})

app.get('/about',  (req, res) => {
 
    res.render('about',{
        nombre: 'Enrique Lara Guerrero'
    });
})
 
app.listen(port, () => {
    console.log('escuchando peticiones en el puerto ' + port)
})