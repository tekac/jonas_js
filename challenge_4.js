const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    let tip = (bill >= 50 && bill <= 300 ? bill * .15 : bill * .20);
    return tip;
}

for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));

}

console.log(tips);