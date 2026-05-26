const express = require('express');
const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
    res.json({
        status: "ONLINE",
        modulo: "Gestion de Pedidos y Ordenes (Legacy)",
        entorno: "produccion_cloud",
        mensaje: "Conexión exitosa con el backend de inventario y despachos."
    });
});

app.listen(PORT, () => {
    console.log(`Modulo de Pedidos corriendo en puerto ${PORT}`);
});
