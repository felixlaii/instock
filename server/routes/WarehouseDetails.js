const express = require('express');
const router = express.Router();
const fs = require("fs");

router.route('/:id')
    .get((req, res) => {

        let inventories = JSON.parse(fs.readFileSync('./data/inventories.json'));
        let warehouses = JSON.parse(fs.readFileSync('./data/warehouses.json'));

        const id = req.params.id;

        let warehouse = warehouses.find(warehouse => warehouse.id === id)
        let inventory = inventories.filter(inventoryItem => inventoryItem.warehouseID === id)

        res
            .status(200)
            .json([warehouse, inventory]);
    })

module.exports = router;
