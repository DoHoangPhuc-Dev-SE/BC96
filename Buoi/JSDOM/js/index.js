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
document.querySelector("p.text").style.background = "black"
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



// Sự kiện

// Onclick
// Đổi tên hình nghề nghiệp
document.querySelector("#card1 button").onclick = function() {
    // tên
    document.querySelector("#card1 h4").innerText = "Le B"
    document.querySelector("#card1 p").innerText = "Tester"
    document.querySelector("#card1 img").src = "https://i.pravatar.cc/150?img=2"
}


document.querySelector("#submit-email").onclick = function() {
    // lấy ND trong input
    console.log(document.querySelector("#email").value)
    let value = document.querySelector("#email").value
    document.querySelector(".ket-qua-email").innerText = value
}

document.querySelector("#btn-bt1").onclick = function() {
    // Lấy ra value của 3 thk input
    let fullName = document.getElementById("fullName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    // Hiển thị ra màn hình
    document.getElementById("showName").innerText = fullName
    document.getElementById("showEmail").innerText = email
    document.getElementById("showPhone").innerText = phone
}

// Hiện mật khẩu

document.querySelector("#btn-bt2").onclick = function() {
    document.getElementById("password").type = "Text";
}

// BT3
document.querySelector("#btn-bt3").onclick = function() {
    // Lấy option dạng đc chọn
    console.log("Thành phố : ",document.getElementById("city").value)
    // Radio 
    console.log(document.querySelector("input[name=gender]:checked").value)
    // ra value của input
    //Checkbox
    console.log(document.getElementById("agree").checked)
    // true false
    // Switch bản chất cx là checkbox
    console.log(document.getElementById("darkMode").checked)
}   
