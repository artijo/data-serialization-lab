const myfriend = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const index = myfriend.indexOf("Jane")
console.log(index)

myfriend.find((value, index) => {
    if (value==="Peter")
    console.log(`Array number ${index+1} is ${value}`)  
    })

    const result = myfriend.findIndex((value) => value==="Bobby")
    console.log(result)