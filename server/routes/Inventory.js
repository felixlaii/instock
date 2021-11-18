const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.route('/item/:id')
    .get((req, res) => {
        let itemsList = fs.readFileSync('./data/inventories.json');

        const id = req.params.id;

        let item = itemsList.find(item => item.id === id)

        res.send(item).status(200);
    })


router.route('/post')
    .post((req, res) => {
        let isValid = true;
        const data = req.body

        for (const k in data) {
            isValid = (data[k] !== "")

            if (!isValid)
                break
        }

        if (!isValid) {
            return res.send("Data couldn't be validated, please try again!").status(404)
        }

        let newItem = {
            id: uuidv4(),
            warehouseID: data.warehouseID,
            warehouseName: data.warehouseName,
            itemName: data.itemName,
            description: data.description,
            category: data.category,
            status: data.status,
            quantity: JSON.parse(data.quantity)
        }

        let items = require('../data/inventories.json')


        items.push(newItem)

        items = JSON.stringify(items, null, 2)

        fs.writeFileSync('./data/inventories.json', items, 'utf8');


        res.send(newItem).status(201)
    })

module.exports = router;