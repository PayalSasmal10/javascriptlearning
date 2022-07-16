
// Primitive types
let lastName = 'Sasmal';
let oldlastName = lastName;
lastName = 'Kumar';
console.log(lastName, oldlastName);


// Reference types
const payal = {
    firstName : 'Payal',
    lastName : 'Sasmal',
    age : 27,
}

const marriedPayal = payal;
marriedPayal.lastName = 'Payal Kumar Prince';
console.log('Before marriage', payal);
console.log('After marriage', marriedPayal);

//  how to copy an object to another variable

// marriedPayal = {};

const payal2 = {
    firstName : 'Payal',
    lastName : 'Sasmal',
    age : 27,
}

const payalCopy = payal;
payalCopy.lastName = 'Payal Kumar Prince';
console.log('Before marriage', payal);
console.log('After marriage', marriedPayal);