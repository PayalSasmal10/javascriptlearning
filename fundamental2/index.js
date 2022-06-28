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