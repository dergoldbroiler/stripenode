const express = require('express'),
    router = express.Router();

const fs = require('fs');

const path = require('path');

const ejs = require('ejs');

const stripe = require('./stripe/stripefunctions');
// server.js

//physical template files
const filenames = {
    home: path.join(__dirname, 'forms/customer.ejs'),
    default: path.join(__dirname, 'forms/customer.ejs'),
}

const filehandles = {
    home: fs.readFileSync(path.join(filenames.home), 'utf8'),
    defalt: fs.readFileSync(path.join(filenames.home), 'utf8')
}


// define the home page route
router.get('/', function(req, res) {
    //compile template with options
    let compiled_template = ejs.compile(filehandles.home)({
        names: ['foo', 'bar', 'baz'],
        formdata: "",
        doctitle: "Startseite"
    });
    res.send(compiled_template)
});
// define the home page route
router.get('/createcustomer', function(req, res) {
    //compile template with options
    let compiled_template = ejs.compile(filehandles.home)({
        names: ['foo', 'bar', 'baz'],
        formdata: "",
        doctitle: "Startseite"
    });
    res.send(compiled_template)
});

// create customer
router.post('/createcustomer', function(req, res) {
    //use callback in stripe functions due to its async nature
    stripe.createCustomer(req.body, (result) => {
        // var compiled_template;
        if (result != false) {
            let compiled_template = ejs.compile(filehandles.home)({
                formdata: req.body.customername + req.body.customerstreet + result.data,
                doctitle: "Kunde angelegt"
            });
            res.send(compiled_template)
        } else {
            let compiled_template = ejs.compile(filehandles.home)({
                formdata: "ERROR",
                doctitle: "Kunde nicht angelegt"
            });
            res.send(compiled_template)
        }

    });
    //send different messages/templates according to stripe result




});
module.exports = router;