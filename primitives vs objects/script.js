'use'
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


//  shallow copy example
console.log("...................shallow copy Example...............");
const payal3 = {
    firstName : 'Payal',
    lastName : 'Sasmal',
    age : 27,
    family: ['Pratima', 'Priyam'],
}

const payalCopy3 = Object.assign({}, payal3);
payalCopy3.family.push('Priyashree');
payalCopy3.family.push('Piglu');
payalCopy3.family.push('Tiklu');

console.log('Before marriage', payal3);
console.log('After marriage', payalCopy3);