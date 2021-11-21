const express = require('express')
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const path = require("path");


let warehouses = fs.readFileSync('./data/Warehouses.json')
warehouses = JSON.parse(warehouses);

let warehouseArray = warehouses.map((warehouse) => {
    let warehouseList = {
        id: warehouse.id,
        name: warehouse.name,
        address: warehouse.address,
        city: warehouse.city,
        country: warehouse.country
    }
    return warehouseList
})

router.route('/')
    .get ((req, res) => {
    (res.json(warehouses)) 
})

router.route('/:warehouseId') 
    .get ((req, res) => {
    const warehouse = warehouses.find(warehouse => warehouse.id === req.params.warehouseId)
    if (!warehouse) {
        return res.status(404)
        .json({
            errorMessage: `Warehouse ${req.params.warehouseId} not found`
        })
    }
    return res.json(warehouse)
})
    
    .put ((req, res) => {
    const warehouse = warehouses.find(warehouse => warehouse.id === req.params.warehouseId)
    const { name, address, city, country, contactName, position, phone, email } = req.body;
    if ( name==="" || address==="" || city==="" || country==="" || contactName==="" || position==="" || phone==="" || email==="") {
        return res.status(404)
        .json({
            errorMessage: `Warehouse ${req.params.warehouseId} not found`
        })
    }
    warehouse.name = name
    warehouse.address = address
    warehouse.city = city
    warehouse.country = country
    warehouse.contact.name = contactName
    warehouse.contact.position = position
    warehouse.contact.phone = phone
    warehouse.contact.email = email

    fs.writeFileSync('data/warehouses.json', JSON.stringify(warehouses))
    return res.send(warehouses).status(200)
})
      
router.get("/", (req, res, next) => {
    try {
    const warehouses = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/warehouses.json")));

router.get("/", (req, res) => {
    const warehouses = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/warehouses.json")));
    if (warehouses){
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
        console.log(path.resolve(__dirname, "../data/warehouses.json"));
        fs.writeFile(path.resolve(__dirname, "../data/warehouses.json"), JSON.stringify(newWarehouses), (error) => {if(error){throw error}});
        fs.writeFile(path.resolve(__dirname, "../data/inventories.json"), JSON.stringify(newIventories), (error) => {if(error){throw error}});
        res.status(200).send("Successfully deleted warehouse");
        
    } catch (error) {
        res.status(404);
        next(error);
    }
});

module.exports = router;