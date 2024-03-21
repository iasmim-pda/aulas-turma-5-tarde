//moment.js
let dataAgora = moment();
console.log(dataAgora.lang("pt-br").format("DD/MMMM/YYYY HH:mm:ss"));

let amanha = moment().add(1, "days");
let ontem = moment().subtract(1, "days");

console.log(amanha.format("DD/MMMM/YYYY"));
console.log(ontem.format("DD/MMMM/YYYY"));

let proximoMes = moment().add(1, "months");
console.log(proximoMes.format("DD/MMMM/YYYY"));
let proximoAno = moment().add(1, "years");
let proximaSemana = moment().add(1, "weeks");

let dataValida = "11/04/2000";
let dataInvalida = "31/04/2000";

let ehValida = moment(dataValida, "DD/MM/YYYY").isValid(); // false
let ehInvalida = moment(dataInvalida, "DD/MM/YYYY").isValid(); //false

console.log(ehValida);
console.log(ehInvalida);
//console.log("Current date and time: " + now.format());

// let tomorrow = moment().add(1, "days");
// console.log("Tomorrow: " + tomorrow.format());

// let nextWeek = moment().add(1, "weeks");
// console.log("Next week: " + nextWeek.format());

// let nextMonth = moment().add(1, "months");
// console.log("Next month: " + nextMonth.format());

// let nextYear = moment().add(1, "years");
// console.log("Next year: " + nextYear.format());

// let lastYear = moment().subtract(1, "years");
// console.log("Last year: " + lastYear.format());

// let lastMonth = moment().subtract(1, "months");
// console.log("Last month: " + lastMonth.format());

// let lastWeek = moment().subtract(1, "weeks");
// console.log("Last week: " + lastWeek.format());

// let yesterday = moment().subtract(1, "days");
// console.log("Yesterday: " + yesterday.format());

// let date = moment("2022-01-01");
// console.log("Formatted date: " + date.format("MMMM Do YYYY"));

// let christmas = moment("2022-12-25");
// console.log("Time until Christmas: " + christmas.fromNow());

// let duration = moment.duration(5, "hours");
// console.log("Minutes: " + duration.asMinutes());

// let dateFormatted = moment();
// console.log(date.format("MMMM Do YYYY, h:mm:ss a")); // Output: October 3rd 2022, 7:15:28 pm
