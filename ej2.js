const express = require('express');
const app = express();
const puerto = 3000;

app.use(express.json()); // для обработки JSON

app.get('/', (req, res) => {
    res.send('welcome');
});

app.get('/productos', (req, res) => {
    res.send('listado de productos');
});

app.post('/productos', (req, res) => {
    res.send('Crear un producto');
});

app.put('/productos/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Actualizar el producto con id ${productId}`);
});

app.delete('/productos/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Borrar el producto con id ${productId}`);
});

// Rutas para Usuarios
app.get('/usuarios', (req, res) => {
    res.send('Listado de usuarios');
});

app.post('/usuarios', (req, res) => {
    res.send('Crear un usuario');
});

app.put('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Actualizar el usuario con id ${userId}`);
});

app.delete('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Borrar el usuario con id ${userId}`);
});

// Levantar el servidor
app.listen(puerto, () => {
    console.log(`Servidor levantado en el puerto ${puerto}`);
});

