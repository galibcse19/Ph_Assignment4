// problem number-5: Predict Avarage Waiting Time

/*function signature/sample */
function  waitingTime(waitingTimes, serialNumber) {
    // You have to write your code here
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
        // console.log(sum,Avarage,properSerialNumber,needTimeToWait); 
        return needTimeToWait;
}
//input a object
const time= [13,2,6,7,10];
const serial= 10;
const result = waitingTime(time,serial);
console.log(result);

