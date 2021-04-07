const stripe = require('stripe')('sk_test_51HAsLFFrOhMwejIpO5YEWMMu5qlEkPYdrdplYJnrSDUoSKFOrvE8OGrdgNZn29CoCp8TXhtODj63WnmxpYKMmhuY00DBGyKsXA');

module.exports = stripe;

//Create customer via promise
// const customer = stripe.customers.create({
//     description: 'My First Test Customer (created for API docs)',
// }).then(ok => {
//     console.log(ok)
// })
// .catch(err => {
//     console.error(err)
// })