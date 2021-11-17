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
        city: warehouse.city,
        country: warehouse.country
        // contact: warehouse.contact
    }
    return warehouseList
})

router.get('/', (req, res) => {
    (res.json(warehouses))
    
})

router.get('/:warehouseId', (req, res) => {
    const warehouse = warehouses.find(warehouse => warehouse.id === req.params.warehouseId)
    if (!warehouse) {
        return res.status(404)
        .json({
            errorMessage: `Warehouse ${req.params.warehouseId} not found`
        })
    }
    return res.json(warehouse)
})


module.exports = router;