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