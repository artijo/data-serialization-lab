summation=(...numberArr) => {
    let total = 0
    for (let num of numberArr)
    total += num
    return(total)
    }
    console.log(summation(10, 5))
    console.log(summation(10, 5, 10))
    console.log(summation(10, 5, 10, 15))