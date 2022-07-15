
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

var numProducts = 10;

function deleteShoppingCart() {
    console.log("deleted all product");
}

// Example
var x = 1 ; // This section can add variable on window object in javascript but let and const don't do that.
let y = 2;
const z = 3;

console.log( x === window.x);
console.log( y === window.y);
console.log( z === window.z);



/*
Note:
1. If we use var then we can get undefined.
2. If we use const and let then we get ReferenceError: variable can't access after initializing.
3. Aolways try to use const. let only can be used if we are changing the value later . don't use var for declaring the variable.
*/