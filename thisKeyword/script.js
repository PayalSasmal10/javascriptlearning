'use strict';
// Global scope 
console.log(this);

// fundtion expression

const calcAge = function (birthday) {
    console.log(2022-birthday);
    console.log(this);
}

calcAge(1994);

/*
Note-
1. In global scope this keyword point to window object.
2. Inside function(function expression example), it will be undifined if we use as strict mode else it will be the global window object.

*/