const myTimeout = setTimeout(myGreeting, 3000);
function myGreeting() {
console.log("Happy Birthday!")
}

let x = "Happy Birthday"
let y = "to you"
setTimeout(()=> console.log(x) , 2000);
setTimeout(()=> console.log(y) , 4000);