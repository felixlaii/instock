const express = require('express');
const router = express.Router();
let warehouses = require('../data/warehouses.json');

router.route('/:id')
    .get((req, res) => {

        const id = req.params.id;

        let warehouse = warehouses.find(warehouse => warehouse.id === id)

        res
            .status(200)
            .send(warehouse);
    })

module.exports = router;
