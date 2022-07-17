'use strict';

// 1. Destructuring Array lecture code.
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

// how to get undefined values

const [p, q, r, s] = [9, 4, 2];
console.log(p, q, r, s);

// how to assigned default variables
const [t=1, u=1, v=1] = [9, 4];
console.log(t, u, v);



// 2. Destructuring Objects/dictionary/map
console.log("......................Destructuring Objects Started....................")
const restaurant2 = {
    name : 'Classical Italiano',
    location1 : 'Via Angelo Tavanti 23, Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza', 'Pasta', 'Risotto'],
    openingHours : {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order : function(startIndex, mainIndex){
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, address, mainIndex = 0, time = '20:00'}) {
        // console.log(obj);
        console.log(`Order Delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
};


const { name, categories, mainMenu, openingHours, location1 } = restaurant2;
console.log(name, location1, categories, mainMenu, openingHours);

const { name : restaurantName, openingHours: hour, categories : tags} = restaurant2;
console.log(restaurantName, hour, tags);

// default values allocation
const { menu = [], startMenu: starters = [], categories: tagsC = []} = restaurant2;
console.log(menu, starters, tagsC);

// Mutating variables
let w = 110;
let o = 200;
const obj = { w : 23, o : 80, c : 0.1};
({w,o} = obj);
console.log(w,o);

// Nested objects
const {fri : {open : op, close: cl}} = openingHours;
console.log(op, cl);

// orderDelivery
restaurant2.orderDelivery({
    time: '12:20',
    address : 'Here you go',
    mainIndex: 2,
    starterIndex : 2,
});