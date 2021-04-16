// const friends = new Array('Jeremy', 'Brendon', 'Kyle');

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);


// const calcAge = (birthYeah) => {
//     return 2037 - birthYeah;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// //calc age for 1st, 2nd and last element.

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = new Array(age1,age2,age3);
// console.log(ages);


//////////////////////
// Array Operations
/////////////////////


// // Add Elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');  // Adds an element to the beginning of the array
// console.log(friends);

// // Remove Elements
// const test = friends.pop() // Last Element .. stores in variable
// friends.unshift(test); //takes the pop (last element) and places it in the beginning
// console.log(friends);

// console.log(friends.indexOf('Michael'));
// console.log(friends.indexOf('Bob'));  // If not in the array , returns -1

// // Include returns TRUE || FALSE 
// // Checks with STRICT EQUALITY

// friends.push(23);
// console.log(friends.includes('Michael'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));  // '23' would return false

// if (friends.includes('Bob')) {
//     console.log(`You have a friend named Michael`);
// } else {
//     console.log(`You do not have a friend named Michael`);
// }


// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1991,
//     job : 'teacher',
//     friends : ['Michael', 'Peter', 'Steven']
// };

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // Bracket notation can take an expression ... dotted cannot.

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// // if (jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);
// // } else {
// //     console.log('Wrong request: Choose between firstName, lastName, age, job, and friends');
// // }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';

// console.log(jonas);


////////////////
///CHALLENGE
////////////////
// Jonas has 3 friends, and his best friend is Michel
// 3 values are Jonas, 3 and Michael - Print this sentence without hard coding any of the values

