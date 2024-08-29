const {calculateBMI} = require('./BMI_UserModel');

let {BMI, txt} = calculateBMI(70, 1.75);
console.log(`BMI = ${BMI} ==> ${txt}`);