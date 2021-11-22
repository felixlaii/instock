const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.route('/item/:id')
    .get((req, res) => {
        let itemsList = fs.readFileSync('./data/inventories.json');
        itemsList = JSON.parse(itemsList)

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

        let items = fs.readFileSync('./data/inventories.json');

        items = JSON.parse(items)
        items.push(newItem)
        items = JSON.stringify(items, null, 2)

        fs.writeFileSync('./data/inventories.json', items, 'utf8');


        res.send(newItem).status(201)
    })


router.route('/edit')
    .put((req, res) => {
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

        let itemsList = fs.readFileSync('./data/inventories.json');
        itemsList = JSON.parse(itemsList)


        let foundItem = itemsList.find(item => item.id === data.id)


        if (!foundItem) {
            console.log(`Item wasn't found, check database!`)
            return res.send("Item wasn't found!").status(404)
        }

        let orderItem = {
            id: foundItem.id,
            warehouseID: data.warehouseID,
            warehouseName: data.warehouseName,
            itemName: data.itemName,
            description: data.description,
            category: data.category,
            status: data.status,
            quantity: JSON.parse(data.quantity)
        }

        itemsList = itemsList.filter(item => item.id !== orderItem.id)

        itemsList.push(orderItem)

        fs.writeFileSync('data/inventories.json', JSON.stringify(itemsList, null, 2), 'utf8')

        return res.send(orderItem).status(200)
    })

router.delete("/delete-inventory/:itemId", (req, res, next) => {
    try {
        const inventory = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/inventories.json")));
        const newIventories = inventory.filter(item=>item.id!==req.params.itemId);
        if (inventory.length === newIventories.length) {
            throw new Error(`Item with id=${req.params.itemId} not found`);
        }
        fs.writeFile(path.resolve(__dirname, "../data/inventories.json"), JSON.stringify(newIventories), (error) => {if(error){throw error}});
        res.status(200).json(newIventories);
        
    } catch (error) {
        res.status(404);
        next(error);
    }
});


module.exports = router;