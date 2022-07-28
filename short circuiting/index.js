
// short circuiting- use any data type, return any data type.

// find the truthy value if it is exsist then return that value
// if both value is falsy then take the last value.
console.log("...........OR Operator..........");

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

// using short circuiting

const guest2 = restaurant.numberGuest || 10;
console.log(guest2);


console.log("....AND Operator......");
// exactly the opposite OR operator. it return the falsy value.
// if both value is truthy then take the last value.

console.log(0 && 'Payal');
console.log('Payal' && 'Sasmal');
console.log('Payal' && 90 && 'Sasmal' && null && 23);

if (restaurant.orderPizza){
    restaurant.orderPizza('Mushrooms', 'Spanich');
}

restaurant.orderPizza && restaurant.orderPizza('Chicken', 'Tasty');

// Nulish value means - if it is not undefined or null then return that 1st value,
// nullish doesnt mean- 0 or ''

restaurant.numberGuest = 0;
const guest3 = restaurant.numberGuest ?? 10;
console.log(guest3);
// restaurant.numberGuest = 0;
const guest4 = restaurant.numberGuest1 ?? 10;
console.log(guest4);