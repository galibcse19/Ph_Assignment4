// problem number-2: Notification Generator

/*function signature/sample */
function sendNotification(email) {
    // You have to write your code here
    if(email.indexOf('@') === -1){
        return "Invalid Email";
    }
    const spliting = email.split('@');
    const userName = spliting[0];
    const domainName = spliting[1];

    return `${userName} sent you an email from ${domainName}`;
}
//user input 
// const email = prompt("Enter email:");

const email= "mrgalib40@gmail.com";
const result = sendNotification(email);
console.log(result);
