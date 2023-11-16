const express = require("express");
const { productos, vehiculos, personas } = require("./data/data");

const app = express();

const port = 8000;

app.get("/",( request, response) => {
    response.json({
        ok: true,
        routes: ["/api/productos","/api/vehiculos","/api/personas",]
    })
});

app.get("/api/productos", (req, res) => {
    res.json({ ok: true, data: productos})
});

app.get("/api/vehiculos", (req, res) => {
    res.json({ ok: true, data: vehiculos})
})

app.get("/api/personas", (req, res) => {
    res.json({ ok: true, data: personas})
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});
