
// variable hoisting
console.log(me);  //we will be getting undefined ouput from here.
// Temporary Dead Zone
// console.log(job);
// Temporary Dead Zone
// console.log(year);

var me = "Payal";
let job = "Software Developer";
const year = 1994;


// console.log(addDecl(2, 3));
// TDZ is happening here as i have used const, now will change to var. after adding var we are getting Error:addExp is not a function
// console.log(addExp(2, 3));
// TDZ is happening here too. As i have used const, now will change to var.after adding var we are getting Error:addExp is not a function
// console.log(addArrow(2, 3));

//function declaration 
function addDecl(a, b){
    return a + b;
}

// function expression -
var addExp = function(a, b) {
    return a + b;
}

// arrow function
var addArrow = (a, b) => a + b;


// Example of hoisting

console.log(numProducts);
if(!numProducts) deleteShoppingCart();

const numProducts = 10;

function deleteShoppingCart() {
    console.log("deleted all product");
}