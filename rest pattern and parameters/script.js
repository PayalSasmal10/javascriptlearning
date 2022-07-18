
// Spread, beacuse on RIGHT side of = sign
const arr = [1, 2, ...[3, 4]];

// Rest, because on LEFT side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


const restaurant = {
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
    },
    orderPizza : function(mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
};

// variables
const [pizza, , ristto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, ristto, otherFood);


// Objects

const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

// Functionrest parameters

const add = function(...numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) sum += numbers[i];
    console.log(sum);
}


add(2, 3);
add(4, 5, 6);
add(80, 23, 76, 54, 87);

const x= [3, 5, 4];
add(...x);

restaurant.orderPizza('Mushroom', 'onions', 'olivs', 'spinach');
restaurant.orderPizza('Cheese');