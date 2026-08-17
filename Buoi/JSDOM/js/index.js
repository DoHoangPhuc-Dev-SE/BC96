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

// Atribute
// Đổi đường dẫn hình ảnh
// scr là thuộc tính của thẻ img
let img = document.querySelector("img")

console.log(img.src)
img.src = "https://www.in.pro.vn/wp-content/uploads/2025/01/hinh-nen-manchester-united-voi-cup-vo-dich-the-hien-thanh-tich-cua-mu.webp"

// Thay đổi href của thẻ a
document.querySelector("a").href = "https://github.com/DoHoangPhuc-Dev-SE"

//  Đổi class
let tagP = document.querySelector(".doi-class p")
console.log(tagP.className)
tagP.className = "Hihi"

// Thêm class
console.log(tagP.classList)
tagP.classList.add("Hihi")

// Bỏ class
tagP.classList.remove("p5")

// querySelector all
// document.querySelectorAll("h1")
// - h1
// - h1

// toggle
let btn = document.querySelector(".change-theme")
btn.onclick = function() {
    // Test có ăn JS ko
    console.log("Click button")
    document.querySelector("body").classList.toggle("dark");
}



// Dự kiện
