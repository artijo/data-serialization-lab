function calculateBMI(w, h){
    let BMI = w / Math.pow(h, 2);
            let txt = BMI < 18.5 ? 'You have underweight'
                : BMI < 25 ? 'You have normal weight'
                    : BMI < 30 ? 'You have overweight'
                        : 'You are obesity';
    return { BMI, txt };
}

export {calculateBMI};