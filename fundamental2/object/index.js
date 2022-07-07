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
    birthyear: 1994,
    job: 'Software Developer',
    friends: ['A', 'B', 'C'],
    hasDRiverLicense: false,
    
    // calcAge: function(birthyear) {
    //     return 2022 - birthyear;
    // }

    // calcAge: function() {
    //     return 2022 - this.birthyear;
    // }

    calcAge: function() {
        this.age = 2022 - this.birthyear;
        return this.age ;
    },

    getSummery: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDRiverLicense ? 'a' : 'no'} driver's Lisence`;
        
    }
};


// console.log(person.calcAge(1994));

// console.log(person.calcAge());

console.log(person.calcAge());
console.log(person.age);


// Challenge- "Jonas is a 46 years old teacher, and he has a driver's license".

console.log(person.getSummery());

