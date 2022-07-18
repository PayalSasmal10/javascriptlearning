
// 1st way - How to add merge two arrays into a new array
const arr = [1, 2, 7, 4];
const bandNewArr = [8, 10, arr[0], arr[1], arr[2], arr[3]];
console.log(bandNewArr);

// 2nd way - 
// const newArr = [8, 10, arr];
const newArr = [8, 10, ...arr];
console.log(newArr);

console.log(...newArr);

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
    orderPasta : function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};


// Merge array from restaurant object

const newMenu = [...restaurant.mainMenu, 'Butter Paneer masala'];
console.log(newMenu);



// shallow Copy to an array 

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);



// Spread operator can work on strings
const str = "Payal";
const letters = [...str, 's.'];
console.log(...str);
console.log(...str,'','.s');
console.log(letters);

// Real world example
const ingredients = [
    // prompt('Let\'s make pasta! Ingredient 1?'),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3?')
];

restaurant.orderPasta(ingredients[0],
    ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = {foundedIn : 1998, ...restaurant, founder : 'Payal'};
console.log(newRestaurant);

// This can happened with deep copy
const newRestaurantCopy = {...restaurant};
newRestaurantCopy.name = 'Payal\'s Restaurant';
console.log(newRestaurantCopy.name, restaurant.name)

/*
Note:
1. Spread opeartor is a diff from destructring- it takes the elements from the array.
and it doesn't create new variables.AS a consequence, we only can use in places where we would otherwise
we write values sperate by commas.
2. Spread operator works on iterable- arrays, strings, sets, maps. but not objects. but spread operator 
can work on objects even though it is not iterable.
 
*/