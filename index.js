// Write your solution in this file!
// customerName variable
var customerName = 'bob';

// upperCaseCustomerName function
function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

// setBestCustomer function
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring a variable in global scope
}

// overwriteBestCustomer function
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Changing the value of the global variable
}

// leastFavoriteCustomer constant
const leastFavoriteCustomer = 'someone';

// changeLeastFavoriteCustomer function
function changeLeastFavoriteCustomer() {
    // Attempting to change a constant - This will cause an error
    leastFavoriteCustomer = 'new least favorite';
}
