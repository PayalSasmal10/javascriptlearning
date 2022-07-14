
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
// TDZ is happening here
// console.log(addExp(2, 3));
console.log(addArrow(2, 3));

//function declaration 
function addDecl(a, b){
    return a + b;
}

// function expression
// const addExp = function(a, b) {
//     return a + b;
// }

// arrow function
const addArrow = (a, b) => a + b;
