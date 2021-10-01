const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors({origin: "http://test"}))

app.get("/", (req, res) => {
    res.json({msg: "Test Message!"})
})


app.listen(6000)