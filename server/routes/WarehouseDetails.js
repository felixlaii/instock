const express = require('express');
const router = express.Router();

router.route('/:id')
    .get((req, res) => {

        let inventories = fs.readFileSync('./data/inventories.json');
        let warehouses = fs.readFileSync('./data/warehouses.json');

        const id = req.params.id;

        let warehouse = warehouses.find(warehouse => warehouse.id === id)
        let inventory = inventories.filter(inventoryItem => inventoryItem.warehouseID === id)

        res
            .status(200)
            .send([warehouse, inventory]);
    })

module.exports = router;
