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
