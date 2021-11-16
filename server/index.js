const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require('cors')
const warehouses = require("./routes/Warehouses");
const inventory = require("./routes/Inventory");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/', warehouses);
app.use('/inventory', inventory);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));