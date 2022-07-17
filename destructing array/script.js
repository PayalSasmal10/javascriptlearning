'use strict';

const restaurant = {
    name : 'Classical Italiano',
    location : 'Via Angelo Tavanti 23, Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza', 'Pasta', 'Risotto'],
    order : function(startIndex, mainIndex){
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
    },
};

// destructuring array
const arr = [2, 5, 6];
const [a, b, c] = arr;
console.log(a, b, c);

const x = arr[0];
const y = arr[1];
const z = arr[2];

console.log(x, y, z);


//  swap two varaibles
console.log("....................SWap variables...................");
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// 1st way to swap the variables
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

console.log("......2nd Way to swap the variables..........");

[main, secondary] = [secondary, main];

console.log(main, secondary);

// Recieve 2 return values from a function

const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested array destructuring
const nested = [2, 4, [5, 6]];
const [i,,j] = nested;
console.log(i, j);

// how to access nested array value.
const [n,,[m,k]] = nested;
console.log(n,m,k);
console.log(n,[m,k]);