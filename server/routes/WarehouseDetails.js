const express = require('express');
const router = express.Router();
let warehouses = require('../data/warehouses.json');
let inventories = require('../data/inventories.json');

router.route('/:id')
    .get((req, res) => {

        const id = req.params.id;

        let warehouse = warehouses.find(warehouse => warehouse.id === id)
        let inventory = inventories.filter(inventoryItem => inventoryItem.warehouseID === id)

        res
            .status(200)
            .send([warehouse, inventory]);
    })

module.exports = router;
