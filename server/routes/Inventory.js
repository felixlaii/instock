const { application } = require('express');
const express = require('express');
const router = express.Router();


router.route('/item/:id')
    .get((req, res) => {
        let itemsList = require('../data/inventories.json');

        const id = req.params.id;

        let item = itemsList.find(item => item.id === id)

        res.send(item).status(200);
    })



module.exports = router;
