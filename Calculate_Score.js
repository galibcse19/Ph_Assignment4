//Problem number-4: Calculate Admission Final Score 

/*function signature/sample */
function calculateFinalScore(obj) {
    //write your code here
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

const obj ={
    name: "Rajib", 
    testScore: 35, 
    schoolGrade: 30, 
    isFFamily: true
} 

const result = calculateFinalScore(obj)
console.log(result);