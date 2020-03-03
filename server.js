const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json);

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/tables", (request, response) => {
    res.sendFile(path.join(__dirname, "public", "tables.html"))
})

app.get("/makeres", () => {
    
})

app.get("")