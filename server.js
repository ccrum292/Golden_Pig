const express = require("express");
const path = require("path")

const app = express();
const PORT = 3001;

const reservedTables = [];
const waitList = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "tables.html"))
})

app.get("/reservations", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "reservations.html" ))
})

app.get("/api/tables", (req, res) => {
    return res.json(reservedTables)
})
app.get("/api/waitlist", (req, res) => {
    return res.json(waitList)
})




app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

