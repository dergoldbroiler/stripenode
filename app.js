'use strict';
/*
 * requirements
 */
const express = require('express'),
    app = express();

const router = require('./router');

const bodyParser = require('body-parser');

const path = require('path');

/* ----------------------------------------------- */

/*
 * middleware
 */
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//user body parser due to its capability to save form post requests in the express req object
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

/* ----------------------------------------------- */

app.listen(3000, (req, res) => {
    console.log('Server liseting on pprt 3000')
})