require('dotenv').config(); // Cargar variables de entorno
const express = require('express'); // Framework para el servidor
const axios = require('axios'); // Librería para solicitudes HTTP
const cors = require('cors'); // Manejo de restricciones de origen cruzado

const app = express(); // Inicializa Express
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilita CORS
app.use(express.json()); // Para interpretar JSON

// Configura la carpeta pública
app.use(express.static('public'));

// Ruta para obtener una receta aleatoria de TheMealDB
app.get('/api/random-meal', async (req, res) => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        res.json(response.data); // Envía los datos obtenidos al frontend
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la receta aleatoria' });
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



