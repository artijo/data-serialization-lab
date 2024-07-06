const myarray=[10, 20, 30, 40, 50]
for (let i=0; i<myarray.length; i++) {
if (myarray[i] > 30) break
console.log(`สมาชกิลาํ ดบัทÉี${i} = ${myarray[i]}`)
}

myarray.forEach(value => {
    console.log(`สมาชกิ = ${value}`)
    })

    let total = 0
    myarray.forEach(value => {
    total += value
    console.log(`ผลรวม = ${total}`)
    })

    const myposts=[
        {title: "My post1 title", body: "My post1 body"},
        {title: "My post2 title", body: "My post2 body"},
        {title: "My post3 title", body: "My post3 body"}
        ]
        myposts.forEach((post, index) => {
        console.log(`หวัขอ้ทÉี${index+1} : ${post.title} ขอ้ ความคอื ${post.body}`)
        })