const fs = require("fs");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

import { SERVER_PORT } from '../config';

// load binary proving key
const proving_key = fs.readFileSync("./withdraw_proving_key.bin");

// create express app
const app = express();

// allow CORS policy so that you can pass data from one localhost port to another during development (otherwise you get an error)
app.use(cors());

// use bodyParser for easier request body manipulation
app.use(bodyParser.json());

// send proving_key on get request
app.get('/provingKey', function (req, res) {
    res.send(proving_key)
})

// run the server on specified port
const port = process.env.PORT || SERVER_PORT; //
app.listen(port, () => console.log(`Server listening on port ${port}...`));