const express = require('express');
const app = express();
const port = process.env.PORT  || 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicacion');
});

app.listen(port, () => {
    console.log('App escuchando en http://localhost:${port}');
});