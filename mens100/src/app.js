const express = require("express");
require("./db/conn")

const MensRanking = require("./models/mens")
const router = require("./routers/menRouers")

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

app.listen(port, (req, res) => {
    console.log(`your port is ${port}`)
})