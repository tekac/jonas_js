const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
const arr = [];

const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300 ? bill * .15 : bill * .20);
}

for (i = 0; i < bills.length; i++) {
    const total = bills[i] + calcTip(bills[i]);
    tips.push(calcTip(bills[i]));
    totals.push(total);
}


const calcAverage = function (arr) {
    let sum = 0;
    
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));