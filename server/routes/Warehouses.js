const express = require('express')
const router = express.Router();
const fs = require("fs");

let warehouses = fs.readFileSync('./data/Warehouses.json')
warehouses = JSON.parse(warehouses);

let warehouseArray = warehouses.map((warehouse) => {
    let warehouseList = {
        id: warehouse.id,
        name: warehouse.name,
        address: warehouse.address,
        city: warehouse.city
    }
    return warehouseList
})

router.put('/', (req, res) => {
    (res.json(warehouses))
})


module.exports = router;