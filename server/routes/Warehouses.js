const express = require('express')
const router = express.Router();
const fs = require('fs')
const path = require("path");


const warehouses = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/warehouses.json")));

router.get("/", (req, res) => {
    if (warehouses){
        res.status(200);
        res.json(warehouses);
    } else {
        res.status(404).send("warehouses not found");
    }   
});

module.exports = router;