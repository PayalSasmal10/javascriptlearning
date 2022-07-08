
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i=0; i< bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);



//  2nd Challenge
console.log("................Second Challenge..................");

const calcAverage = function(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum += arr[i];
        

    }
    average = sum / arr.length;
    return average;
} 

console.log(calcAverage(bills));
console.log(calcAverage(totals));