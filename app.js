const express = require("express");
const { dirname } = require("path");
const path = require("path");
const app = express();
const port = 3000;



app.get("/", (req, res) => res.send("comision17"));
app.get("/home", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/contacto", (req, res) => res.sendFile(path.resolve(__dirname, "views", "contacto.html")));

app.listen(port, () => console.log(`servidor levantado correctamente en http://localhost:${port}`));


