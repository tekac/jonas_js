const calcTip = function (bill) {
    let tip = (bill >= 50 && bill <= 300 ? bill * .15 : bill * .20);
    return tip;
}



const bills = [125,555,44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1 ])];

let v1,v2,v3;

v1 = bills[0] + tips[0];
v2 = bills[1] + tips[1];
v3 = bills[2] + tips[tips.length - 1];

const values = [v1,v2,v3];

console.log(tips, values);

console.log(`The bill was $${bills[0]} with a tip of $${tips[0]} for a total of $${values[0]}`);