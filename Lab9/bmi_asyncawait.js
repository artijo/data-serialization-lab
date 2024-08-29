async function calBMIAsync(w, h) {
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
async function calculateAll() {
    let result = await calBMIAsync(50, 1.56);
    console.log(`BMI = ${result.BMI} ==> ${result.txt}`);
    result = await calBMIAsync(45, 2.0);
    console.log(`BMI = ${result.BMI} ==> ${result.txt}`);
    result = await calBMIAsync(80, 1.6);
    console.log(`BMI = ${result.BMI} ==> ${result.txt}`);
}
calculateAll();