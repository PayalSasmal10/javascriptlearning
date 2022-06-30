function logger(){
    console.log("Hi there!");
}

logger();

// parameterized function 

function fruitProceesor(apples, grapes){
    console.log(apples,grapes);
    const juice = `Juice with ${apples} apples and ${grapes} grapes`;
    return juice;
}

const finalJuice = fruitProceesor(2,3);
console.log(finalJuice);
console.log(fruitProceesor(2,3));

// function declarations
function clacAge1(year){
    return 2022 - year;
}

const calageYear = clacAge1(1994);
console.log(calageYear);

// function expressions : we don't have to give name of a function i.e it's a annonymous function.

const calAgeYear2 = function (year){
    return 2022 - year;
}

console.log("Here is the expression example:",calAgeYear2(1994));

// arrow function 
const calAgeYear3 = year => 2022-year;

console.log(calAgeYear3(1996));

const retrimentYear = (year, fname) => {
    const age = 2022 - year;
    const retirement = 60 - age;
    return `${fname} will retire after ${retirement}`;
}

console.log(retrimentYear(1994,'Payal'));
