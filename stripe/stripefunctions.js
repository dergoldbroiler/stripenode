'use strict';

const stripe = require('./stripe');

var customer = false;

customer = {
    id: 'jgagdjgwdjg',
    createCustomer: (data, callback) => {
        callback({ data: 'test' });
    }
}


module.exports = customer;