const populations = [331, 1380, 212, 128];   // usa, india, brazil, mexico
const neighbours = ['Mexico', 'Canada'];

neighbours.push('Utopia');
neighbours.pop('Utopia');

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours.indexOf('Canada');
neighbours[1] = ('Republic of Canada');
console.log(neighbours);

let p1,p2,p3,p4;

p1 = percentageOfWorld1(populations[0]);
p2 = percentageOfWorld1(populations[1]);
p3 = percentageOfWorld1(populations[2]);
p4 = percentageOfWorld1(populations[populations.length - 1]);

const percentages = [p1,p2,p3,p4];

function describeCountry (country,population,capitalCity) {
    console.log(`${country} has ${population} million people and it's Capital City is ${capitalCity}`);
}

function describePopulation(country,population) {
    const percentage = percentageOfWorld1(population);

    console.log(`${country} has ${population} million people, which is about ${percentage.toFixed(1)}% of the world`);
}

function percentageOfWorld1 (population) {
    return (population / 7900) * 100;
}

const myCountry = {
    'country' : 'United States',
    'capital' : 'Washington DC',
    'language' : 'English',
    'neighbours' : ['canada', 'mexico']
};

console.log(percentages);

// describeCountry('United States', 328, 'Washington DC');
// describeCountry('India', 1380, 'New Delhi');
// describeCountry('Brazil', 212, 'Rio De Janiero');
// describeCountry('Mexico', 128, 'Mexico City');

console.log(`${myCountry.country} has ${populations[0]} million ${myCountry.language}-speaking people, ${neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population = 333;
console.log(myCountry.population);

myCountry['population'] = 335;
console.log(myCountry.population);
console.log(myCountry);