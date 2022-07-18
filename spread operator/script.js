
// 1st way - How to add merge two arrays into a new array
const arr = [1, 2, 7, 4];
const bandNewArr = [8, 10, arr[0], arr[1], arr[2], arr[3]];
console.log(bandNewArr);

// 2nd way - 
// const newArr = [8, 10, arr];
const newArr = [8, 10, ...arr];
console.log(newArr);

console.log(...newArr);