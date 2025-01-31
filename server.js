// Importa Express
const express = require("express");
const path = require("path");

// Crea una instancia de Express
const app = express();

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde las carpetas "assets" y "public"
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.get('/assets/ilove.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets', 'ilove.js'));
});
app.get('/assets/ilove.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/assets', 'ilove.css'));
});
app.get('/fondo2.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'fondo2.jpg'));
});
app.get('/imagen.gif', (req, res) => {
    res.sendFile(path.join(__dirname, 'imagen.gif'));
});
// Ruta para servir el archivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});