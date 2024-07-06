getPersonDetail = (personName, education = "Bachelor") => {
const person = ` ชืÉอ: ${personName}
ระดบั การศกึษา: ${education}`
return(person)
}
console.log(getPersonDetail("Robert"))
console.log(getPersonDetail("Mary"))
console.log(getPersonDetail("Bob", "PhD"))