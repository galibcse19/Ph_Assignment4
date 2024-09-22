 // assignment-4: 

 //problem number-1: Tax-calculation 
 /*function signature/sample */
function calculateTax(income, expenses) {
    // You have to write your code here
    if (income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * 0.20;
    return tax;
}
// user input 
// const income = parseFloat(prompt("Enter income:"));
// const expenses = parseFloat(prompt("Enter expenses:"));

const income =10000;
const expenses=100;

const result = calculateTax(income, expenses);
console.log(result);
