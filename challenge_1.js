const calcAvg = (s1,s2,s3) => {
    return (s1 + s2 + s3) / 3;
}


const calcWinner = function (avgDolphins, avgKoalas) {
    const avgDol = avgDolphins;
    const avgKoa = avgKoalas;

    if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
        return console.log(`Dolphins win (${avgDol} vs. ${avgKoa})`)
    } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
        return console.log(`Koalas win (${avgKoa} vs. ${avgDol})`);
    } else {
        return console.log(`No team wins.`);
    }
}   

//Test Dataset 1
console.log('Dataset #1: ');
calcWinner(calcAvg(44,23,71), calcAvg(65,54,49));

//Test Dataset 2
console.log('Dataset #2: ');
calcWinner(calcAvg(85,54,41), calcAvg(23,34,27));
