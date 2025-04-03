const express = require("express"); // Import express
const {port} = require('./config.env')
const app = express(); // Create an instance of express


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });

app.get("/", (req, res) => {
    res.send("Hola mi server en Express");
  });