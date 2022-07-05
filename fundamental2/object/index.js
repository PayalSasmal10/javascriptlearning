// object 

// const person = {
//     firstName: 'Payal',
//     lastName: 'Sasmal',
//     age: 2022-1994,
//     job: 'Software Developer',
//     friends: ['A', 'B', 'C'],
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person['job']);

// // bracket notation usages.
// const interestedIn = prompt("Choose these values to get info of payal, firstName, lastName, age, job and friednds ");

// if(person[interestedIn]){
//     console.log(person[interestedIn]);
// }else{
//     console.log("Wrong request!. please choose correct one");

// }

// person.location = 'India';
// person['twitter'] = 'payalsasmal';
// console.log(person);

// console.log(person['firstName']+' has ' + person['friends'].length+ ' friends, and his best friend is called ' + person.friends[0]);
// console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`);



const person = {
    firstName: 'Payal',
    lastName: 'Sasmal',
    age: 2022-1994,
    job: 'Software Developer',
    friends: ['A', 'B', 'C'],
    hasDRiverLicense: true,
    calcAge: function(birthyear) {
        return 2022 - birthyear;
    }
};

console.log(person.calcAge(1994));
