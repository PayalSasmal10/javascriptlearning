'use strict';
// Global scope 
console.log(this);

// fundtion expression

const calcAge = function (birthday) {
    console.log(2022-birthday);
    console.log(this);
}

calcAge(1994);

// Arrow function
const calcAgeArrow = birthday => {
    console.log(2022-birthday);
    console.log(this);
}

calcAgeArrow(1996);

// objects related example

const payal = {
    year : 1994,
    calAge : function(){
        console.log(this);
        console.log(2023 - this.year);
    }
}

payal.calAge();

// THis keyword is dynamic example
const prince = {
    year: 1996,
}

prince.calAge = payal.calAge;
prince.calAge();

// f function example to show how to get error as f is just a function and does not contain the value of year so getting undifined can't have year.

const f = payal.calAge;
// f();

/*
Note-
1. In global scope this keyword point to window object.
2. Inside function(function expression example), it will be undifined if we use as strict mode else it will be the global window object.
3. Inside function(arrow function), it will be pointing to window object for arrow function.
4. for object example, we are checking calcAge
*/

console.log("...........................Regular vs Arrow Function....................")
// Regular function vs Arrow function lecture

var firstName = "Payal";
const oli = {
    firstName : "Oli",
    year : 1994,
    calcAge : function() {
        console.log(this);
        console.log(2022-this.year);
        console.log(`Hey ${this.firstName} from calcAge function`);
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName} from global scope`);
    },
}
oli.calcAge();
oli.greet();




/*
Note
1. Arrow function should not give local scope of object so output is undefinied.
*/