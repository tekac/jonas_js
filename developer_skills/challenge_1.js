'use strict';

/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
*/

// Return [i] and its current index as *days  ex: 17' in 1 days is index [0];
// String needs to have the '...' dots. Each iteration maybe?

const printForecast = function (arr) {
  let joinStr = '';

  for (let i = 0; i < arr.length; i++) {
    joinStr += ` ... ${arr[i]}°C in ${i + 1} days`;
  }
  console.log(joinStr);
};

//Dataset 1
printForecast([17, 21, 23]);
//Dataset 2
printForecast([12, 5, -5, 0, 4]);
