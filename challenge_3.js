p1 = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        return this.BMI =  (this.mass / this.height) ** 2;
    }
};

p2 = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function() {
        return this.BMI =  (this.mass / this.height) ** 2;
    }
};

p1.calcBMI();
p2.calcBMI();

console.log(`${p1.firstName}'s BMI (${Math.floor(p1.BMI)}) is ${p1.BMI ? 'higher than' : 'lower than'} ${p2.firstName}'s (${Math.floor(p2.BMI)})`);