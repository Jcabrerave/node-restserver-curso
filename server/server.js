require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//configuracion global de rutas
app.use(require('../routes'));



mongoose.connect('mongodb://localhost:27017/cafe',{ useNewUrlParser: true }, (err,res) => {
    if(err) throw err;
    console.log('base de datos conectada');
});
 
app.listen(process.env.PORT , () => {
    console.log("escuchadno puesto", process.env.PORT)
} );