const type = [];
const type2 = [];
for (let i =0; i< 5; i++){
    // console.log(i);
    //  assigning values in array one way
    type [i] = typeof i;

    // another way to assigning value in array
    type2.push(typeof i);

}

console.log(type);
console.log(type2);

//  calculate age using array
console.log(".................................................")
const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996];
const age = [];

for (let i= 0; i < years.length; i++){
    // age[i] = 2022- years[i];
    age.push(2022 - years[i]);
}

console.log(age);

//backward array
console.log("..........................................................")
const payal = ['payal', 'sasmal', 2022-1994, 'SW Engineer', ['Prince', 'Dibya', 'Arpita'], true];

for (let i = payal.length; i>=0; i--){
    console.log(i, payal[i]);
}


// Loop inside of a loop

console.log(".........................................................");
for(let exercise=1; exercise < 4; exercise++){
    console.log(`-------------starting exercise ${exercise}`);

    for (let rep=1; rep<6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}