let now = new Date();
console.log(now);

let independenceDay = new Date('July 4, 1776 12:00:00');
console.log(independenceDay);

let year = now.getFullYear(); // gets the four digit year
let month = now.getMonth(); // gets the month (0-11, where 0 is January)
let day = now.getDate(); // gets the day of the month (1-31)
console.log(year, month, day);


let someDate = new Date();
someDate.setFullYear(2000); // sets the year to 2000
someDate.setMonth(0); // sets the month to January
someDate.setDate(1); // sets the day to the 1st
console.log(someDate);