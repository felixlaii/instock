const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));