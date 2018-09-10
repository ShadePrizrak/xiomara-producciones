//Requerieds
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
const colors = require('colors');

//Variables
const app = express();
const port = process.env.PORT || 3000;

//Configuración applitación/x-www-form-urlenconded
app.use(bodyParser.urlencoded({ extended: false }));

//Ruta publica
app.use(express.static(path.resolve(__dirname, '../public')));
console.log('Ruta publica'.yellow, colors.red.underline(path.resolve(__dirname, '../public')));

//HBS engine
hbs.registerPartials(path.resolve(__dirname, '../views/partials'));
console.log('Ruta de los parciales: '.yellow, colors.red.underline(path.resolve(__dirname, '../views/partials')));
app.set('view engine', 'hbs');

//Importamos el index

app.get('/', (req, res) => {
    res.render('index', {
        nombre: "Cesar"
    });
});

app.get('/login', (req, res) => {
    // let body = req.body;

    // if (!req.usuario || !req.pass) {
    //     res.status(404).render('login', {
    //         ErrMensaje: "El usuario y el contraseña con obligatorios",
    //         ErrInicio: "true"
    //     });
    // }

    res.render('login', {
        nombre: "Cesar",
        ErrInicio: "true",
        ErrMensaje: "El usuario y el contraseña con obligatorios"
    });
});

//Configuración del listener
app.listen(port, () => {
    let date = new Date();
    console.log(`${colors.yellow('Escuchando en el puerto')} ${port}. ${colors.yellow('Ultima actualización:')} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
});