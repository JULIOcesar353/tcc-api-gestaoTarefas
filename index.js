require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const router = require("./src/routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos ANTES das rotas
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "src", "uploads")));

app.get("/", (request, response) => {
  response.send("Hello World");
});

// Rotas da API depois
app.use(router);

const porta = process.env.PORT || 3333;
const serverHost = process.env.SERVER || "localhost";

app.listen(porta, "0.0.0.0", () => {
  console.log(`Servidor iniciado em http://${serverHost}:${porta}`);
  console.log("Uploads servidos em:", path.join(__dirname, "src", "uploads"));
});
