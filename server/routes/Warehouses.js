const express = require('express')
const router = express.Router();
const fs = require('fs')
const path = require("path");

router.get("/", (req, res, next) => {
    try {
        const warehouses = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/warehouses.json")));
        res.status(200);
        res.json(warehouses);
    } catch (error) {
        res.status(404);
        next(error);
    }  
});

router.delete("/delete-warehouse/:warehouseId", (req, res, next) => {
    try {
        const warehouses = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/warehouses.json")));
        const inventory = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/inventories.json")));
        const newWarehouses = warehouses.filter(item=>item.id!==req.params.warehouseId);
        const newIventories = inventory.filter(item=>item.warehouseID!==req.params.warehouseId);
        if (warehouses.length === newWarehouses.length || inventory.length === newIventories.length) {
            throw new Error(`Warehouse with id=${req.params.warehouseId} not found`);
        }
        fs.writeFile(path.resolve(__dirname, "../data/warehouses.json"), JSON.stringify(newWarehouses));
        fs.writeFile(path.resolve(__dirname, "../data/inventories.json"), JSON.stringify(newIventories));
        
    } catch (error) {
        res.status(404);
        next(error);
    }
});

module.exports = router;