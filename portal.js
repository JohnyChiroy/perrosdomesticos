const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Johny Chiroy',
    titulo: 'Perros Domésticos'
  })
});

app.get('/pastor_aleman', (req, res) => {
  res.render('pastor_aleman', {
    nombre: 'Johny Chiroy',
    titulo: 'Pastor Alemán'
  })
});

app.get('/golden', (req, res) => {
  res.render('golden', {
    nombre: 'Johny Chiroy',
    titulo: 'Golden Retriver'
  })
});

app.get('/pequines', (req, res) => {
  res.render('pequines', {
    nombre: 'Johny Chiroy',
    titulo: 'Pequines'
  })
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
