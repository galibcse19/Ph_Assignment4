// problem number-3:Checking Digits Inside a Name

/*function signature/sample */
function checkDigitsInName(name) {
    //write your code here
    const checking_inside_any_digits = /\d/;
    const result= checking_inside_any_digits.test(name);
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
    return result;
}
//user input 
// const email = prompt("Enter string:");

const value = "Galib40";
const result = checkDigitsInName(value);
console.log(result);
