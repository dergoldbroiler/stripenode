<?php
//stripe library
require '../vendor/autoload.php';
$request_body = file_get_contents('php://input');

/*
*$data = object containing customerdata:
    [urltoload] => ./includes/createcustomer.php
    [customer_name] => Bjoern Zschernack
    [customer_email] => bz@dergooldbroiler.de
    [customer_adress] => An der Kranzmaar 4, 50968 Koeln, Deutschland
*
*/


/*
* stripe stuff
*/ 

$stripe = new \Stripe\StripeClient(
  'sk_test_51HPNrYF073myK7r7SQY69lNFvwHOXYY9dfjNY8z8knGgEgSMC8lPC9HNcR66hWVsIZlwss7y7eQvXgLR3DF2nt2200DN45fuI2'
);


$session = $stripe->billingPortal->sessions->create([
  'customer' => 'cus_J0kqYkkaKmGI8i',
  'return_url' => 'https://slvsa.de',
]);

header("Location: " . $session->url);
exit();

?>