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


app.post("/api/tables", (req, res) => {
    
    
    // console.log(req.body);
    if(reservedTables.length <= 4) {
        reservedTables.push(req.body)
    } else {
        waitList.push(req.body)
    }
  console.log("waitlist " + waitList);
  console.log("tables " + reservedTables);
})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

