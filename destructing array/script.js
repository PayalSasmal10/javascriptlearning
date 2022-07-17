'use strict';

const restaurant = {
    name : 'Classical Italiano',
    location : 'Via Angelo Tavanti 23, Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza', 'Pasta', 'Risotto'],
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
