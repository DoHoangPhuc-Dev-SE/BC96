// document là toàn bộ trang web
console.log(document)

//querySelector : đi tìm Selector đầu tiên tương ứng trong HTML

console.log(document.querySelector("h1"));
//  innerText : thay đổi ND của thẻ h1
document.querySelector("h1").innerText = "Hello Sumoi" 
//  innerHTML : thay đổi ND của thẻ h1, đọc đc HTMl
// Muốn in ra HTML thì dùng innerHTML còn muốn in ra text thì dùng innerText
document.querySelector("h1").innerHTML = "<i>Hello Sumoi</i>" 

// Đổi ND có thẻ có class là text
// -> BC96 - JS DOM
document.querySelector("p.text").innerText = "BC96 - JS DOM"

document.querySelector("p.text").style.color = "red"
document.querySelector("p.text").style.backgorund = "black"
//text-align trong JS DOM -> textAlign
document.querySelector("p.text").style.textAlign = "center"