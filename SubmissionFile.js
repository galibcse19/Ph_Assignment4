function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }
    const difference = income - expenses;
    const tax = difference * 0.20;
    return tax;
}

function sendNotification(email) {
    if(email.indexOf('@') === -1){
        return "Invalid Email";
    }
    const spliting = email.split('@');
    const userName = spliting[0];
    const domainName = spliting[1];

    return `${userName} sent you an email from ${domainName}`;
}

function checkDigitsInName(name) {
    const checking_inside_any_digits = /\d/;
    const result= checking_inside_any_digits.test(name);
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
    return result;
}

function calculateFinalScore(obj) {
    const { testScore, schoolGrade, isFFamily } =  obj;
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    if(testScore<=50 && schoolGrade<=30 ){
        var finalScore = testScore + schoolGrade;
        if (isFFamily) {
            finalScore = finalScore + 20;
        }
        return finalScore>=80;
    }
    return false;
}

function  waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || waitingTimes.length > serialNumber){
        return "Invalid Input";
    }
        let sum = 0;
        for (let i = 0; i < waitingTimes.length; i++){
            sum = sum + waitingTimes[i];
        }
        const Avarage = Math.round(sum/waitingTimes.length);
        const properSerialNumber= serialNumber-waitingTimes.length-1;
        const needTimeToWait = Avarage*properSerialNumber; 
        return needTimeToWait;
}