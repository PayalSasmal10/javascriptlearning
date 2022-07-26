
// short circuiting- use any data type, return any data type.

// find the truthy value if it is exsist then return that value
console.log(3 || 'Payal');

console.log(null || 'Payal');
console.log(0 || 'Sasmal');
console.log('' || 'Oli');
console.log(true || 0 );
console.log(undefined || 0 );
console.log(undefined || null );
console.log(undefined || 0 || '' || 'Hello' || 23 || null );


// Example 1
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

// Ternery operator way to check
restaurant.numberGuest = 23;
const guest1 = restaurant.numberGuest ? restaurant.numberGuest : 10;
console.log(guest1); 

// 