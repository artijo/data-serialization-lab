import {calculateBMI} from './BMI_UserModel.mjs';

let {BMI, txt} = calculateBMI(70, 1.75);
console.log(`BMI = ${BMI} ==> ${txt}`);