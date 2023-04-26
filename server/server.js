//Load the variables in the .env file so they can be accessed via process.env.VAR_NAME
require('dotenv').config();
const { storeRouter } = require('./routes/store.routes');
const express = require('express');
const cors = require('cors');


//Environment vars
const port = process.env.API_PORT;

//requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
require('./config/mongoose.config');

const app = express();


// app.use is adding 'middleware':
// stuff that happens in the middle of the request and response.

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

// req.body undefined without this!
app.use(express.json());

// this needs to go after the app.use(express.json()) otherwise, you won't be able to receive req.body
app.use('/api/stores', storeRouter);

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));