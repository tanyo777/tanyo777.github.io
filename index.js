const express = require("express");



const app = express();

app.get("/", (req, res) => {
    res.json({msg: "Test Message!"})
})


app.listen(6000)