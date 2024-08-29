function calBMI(w, h, callback) {
    console.log(`เริ่มทําการคํานวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`)
    setTimeout(() => {
        let bmi = w / Math.pow(h, 2)
        let result = bmi < 18.5 ? 'You have underweight'
            : bmi < 25 ? 'You have normal weight'
                : bmi < 30 ? 'You have overweight'
                    : 'You are obesity'
        // console.log(`BMI = ${bmi} ==> ${result}`)
        callback(result, bmi)
    }, 3000)
    }
    calBMI(50, 1.56, (result, msg)=> {
        console.log(`BMI = ${msg} ==> ${result}`)
        calBMI(45, 2, (result, msg)=> {
            console.log(`BMI = ${msg} ==> ${result}`)
            calBMI(80, 1.6, (result, msg)=> {
                console.log(`BMI = ${msg} ==> ${result}`)
            })
        })
    })
