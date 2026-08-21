document.getElementById("on").onclick = function() {
    // đổi src của img
    document.getElementById("light-img").src = "./img/light.png.png"
    // Bật xong ko cho bật nx
    document.getElementById("on").disabled = true;;
    // Có thể tắt
    document.getElementById("off").disabled = false;
}   
document.getElementById("off").onclick = function() {
    // đổi src của img
    document.getElementById("light-img").src = "./img/off.png.png"
    // Tắt xong ko cho tắt nx = disabled nút tắt và mở nút bật
    document.getElementById("off").disabled = true;
    document.getElementById("on").disabled = false;
}

// Dùng JS để tạo HTML cho #demo-element

// document.querySelector("demo-element").createElement("button")
// Tạo ra button
let btn = document.createElement("button")
btn.classList.add("btn", "btn-primary")
btn.innerHTML = "demo"


// Nhét button vào cho #demo-element
document.querySelector("#demo-element").appendChild(btn)

// addEventLisener
// Khi có 2 onclick cùng trỏ vào 1 button thì  action đc 1
// bị ghi đè

document.querySelector("#btn-demo").onclick = function() {
    console.log("Option A")
}
document.querySelector("#btn-demo").onclick = function() {
    console.log("Option B")
}

let btn2 = document.querySelector("#btn-demo");
btn2.addEventListener("click",function(){
    // console.log("[addEventListener] - click bằng addEventLisener")
    console.log("Option A")
})
btn2.addEventListener("click",function(){
    console.log("Option B")
})

