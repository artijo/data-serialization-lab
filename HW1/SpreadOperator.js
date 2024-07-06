const friend = ["Robert", "Mary"]
const allFriend = ["Willy", "Peter", ...friend]
const newFriend = ["Jane", "Bob"]
allFriend.push(...newFriend)
console.log(allFriend)
console.log(allFriend.length)