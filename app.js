//Daniel-Gualtiero

//Proyecto Mercado Libre

//Require express
const express = require('express');

const app = express();

//Require path
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//montar servidor
app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'));

app.get('/', (req, res) => {
    res.sendFile( path.resolve('./views/home.html'));
})

app.get('/login', (req, res) => {
    res.sendFile( path.resolve('./views/login.html'));
})

app.get('/register', (req, res) => {
    res.sendFile( path.resolve('./views/register.html'));
})