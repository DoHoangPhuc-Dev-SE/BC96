let isLogin = false;
let checkLogin = "";

// if (isLogin) {
//     checkLogin = "Xin chào , Sumoi";
// } else {
//     // isLogin = false
//     checkLogin = "Hãy đăng nhập để tiếp tục";
// }

// console.log(checkLogin);

// checkLogin = biểu thức toán tử ba ngôi
// biểu thức điều kiện ? giá trị khi dk đúng : giá trị khi dk sai
checkLogin = isLogin ? "Xin chào Sumoi" : "Vui lòng đăng nhập"
console.log(checkLogin)

// kiểm tra số chẵn lẻ
let number1 = 24;
let kq1 = ""
kq1 = number1 % 2 == 0 ? "Even" : "Odd" 

console.log("kq1 =", kq1)

// Kiểm tra đậu rớt : >=5 đậu ngược lại là rớt
let score = 6
let kq2 = ""
kq2 = score >= 5 ? "Đậu" : "Rớt"

console.log("kq2 =", kq2)

// kiểm tra giới tính
// 1: Nam , 0: là nữ
let gender = true
let kq3 = ""
kq3 = gender ? "Nam" : "Nữ"

console.log("kq3 =", kq3)


// if else if mở rộng
//
let dtb = 9.0;
let xepLoai = dtb >=8 ? "Giỏi"
               : dtb >=6.5 ? "Khá"
               : dtb >=5 ? "Trung bình"
               : "Yếu"


// switch case
document.querySelector("#inputThu").oninput = function () {
    let so = document.querySelector("#inputThu").value;
    let kq = "";

switch (so){
    // so == "1"
    case "1":{
        kq = "Chủ nhật"
        break;
    }
    case "2":{
        kq = "Thứ hai"
        break;
    }
    case "3":{
        kq = "Thứ ba"
        break;
    }
    case "4":{
        kq = "Thứ tư"
        break;
    }
    case "5":{
        kq = "Thứ năm"
        break;
    }
    case "6":{
        kq = "Thứ sáu"
        break;
    }
    case "7":{
        kq = "Thứ bảy"
        break;
    }
    // tương ứng với else
    default: {
        kq = "không hợp lệ"
        break
    }
}
document.querySelector("#result1").innerText = kq
}

//DÙNG SWITCH CASE VỚI GIÁ TRỊ CỤ THỂ , IF ELSE DÀNH CHO KHOẢNG GIÁ TRỊ