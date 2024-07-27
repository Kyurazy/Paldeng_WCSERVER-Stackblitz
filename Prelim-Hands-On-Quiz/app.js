const {add, subtract, multiply, divide} = require('./calculation.js');


const time = 4;
const rph = 300;
const day = 6;

const grossIncome = multiply(rph, multiply(day,time));

const TaxDeduct = 0.1;
const SSSDeduct = 1200;
const PagibigDeduct = 300;
const PhilhealthDeduct = 400;

const tax = multiply(grossIncome,TaxDeduct);
const TotalDeductions = add(add(add(SSSDeduct, PagibigDeduct), PhilhealthDeduct), tax);
const NetSalary = subtract(grossIncome,TotalDeductions)

console.log('The gross income is ', grossIncome);
console.log('Tax:', tax);
console.log('SSS:', SSSDeduct);
console.log('Pag-Ibig fund:', PagibigDeduct);
console.log('PhilHealth:', PhilhealthDeduct);
console.log('Total Deductions:', TotalDeductions);
console.log('The Net Salary is ', NetSalary);
