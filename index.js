const express = require('express')
require('dotenv').config();
const app = express()
const { db, query } = require("./database")
const cors = require('cors')
const { body, validationResult } = require('express-validator')
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})