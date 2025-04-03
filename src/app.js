const express = require("express"); // Import express
const app = express(); // Create an instance of express
const port = 8000; // puerto de escucha

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });

app.get("/", (req, res) => {
    res.send("Hola mi server en Express");
  });