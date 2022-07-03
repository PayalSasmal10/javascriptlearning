// array methods

// add elements at the end of the array 
const numberArray = [4, 5, 9.4, 'payal', 1];
numberArray.push(10);
console.log(numberArray);


// add element at first position of the element in array.
numberArray.unshift('sasmal');
console.log(numberArray);

// remove element from the end of the array.
numberArray.pop();
console.log(numberArray);

// remove element from the first position of the array.

numberArray.shift();
console.log(numberArray);

// remove element from a particular position.
numberArray.splice(2,2); // splice(start, deletecount)
console.log(numberArray);

//using indexof
const index = numberArray.indexOf(5);
if (index > -1){
    numberArray.splice(index,1)
}
console.log(numberArray);