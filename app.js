const express = require("express");
const { dirname } = require("path");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))


// app.get("/", (req, res) => res.send("comision17"));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/contacto", (req, res) => res.sendFile(path.resolve(__dirname, "views", "contacto.html")));
app.get("/login", (req, res) => res.sendFile(path.resolve(__dirname, "views", "login.html")));
app.get("/carrito", (req, res) => res.sendFile(path.resolve(__dirname, "views", "carrito.html")));
app.get("/register", (req, res) => res.sendFile(path.resolve(__dirname, "views", "register.html")));



app.listen(port, () => console.log(`servidor levantado correctamente en http://localhost:${port}`));


