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
5. is MIllien example( down in regular function example), if a function is inside of a function then this keyword would be undefinied. 
Inner function This keyword doe not work.
  We can solve the above problem with
    i. this line const self = this (solution 1) [which is outside of inner function and we can use that self keyword inside of inner function]
    ii. WE can use arrow function as it has parent scope.
    */

console.log("...........................Regular vs Arrow Function....................")
// Regular function vs Arrow function lecture

var firstName = "Payal";
const oli = {
    firstName : "Oli",
    year : 1994,
    calcAge : function() {
        console.log("..............CalAge...............");
        console.log(this);
        console.log(2022-this.year);
        console.log(`Hey ${this.firstName} from calcAge function`);

        // Solution 1
        /*const self = this; // self or that
        const isMillenial = function (){
            console.log(self);
            console.log( self.year >= 1994 && self.year <= 1998);
        }
        isMillenial();*/

        // Solution 2
        console.log(".................Second Solution.................");
        const isMillenial =  () =>{

            console.log(this);
            console.log( this.year >= 1994 && this.year <= 1998);
        }
        isMillenial();
    },

    greet: () => {
        console.log(".............Greet.................");
        console.log(this);
        console.log(`Hey ${this.firstName} from global scope`);
    },
}
oli.greet();
oli.calcAge();





/*
Note
1. Arrow function should not give local scope of object so output is undefinied.
*/