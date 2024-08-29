function calBMIPromise(w, h) {
    console.log(`เริ่มทําการคํานวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`)
    return new Promise((resolve) => {
        setTimeout(() => {
            let BMI = w / Math.pow(h, 2);
            let txt = BMI < 18.5 ? 'You have underweight'
                : BMI < 25 ? 'You have normal weight'
                    : BMI < 30 ? 'You have overweight'
                        : 'You are obesity';
            resolve({ BMI, txt });
        }, 3000);
    });
}

calBMIPromise(50, 1.56)
.then(({ BMI, txt }) => {
    console.log(`BMI = ${BMI} ==> ${txt}`)
    return calBMIPromise(45, 2.0)
})
.then(({ BMI, txt }) => {
    console.log(`BMI = ${BMI} ==> ${txt}`)
    return calBMIPromise(80, 1.6)
})
.then(({ BMI, txt }) => {
    console.log(`BMI = ${BMI} ==> ${txt}`)
})