// import : nhập
import { tinhToan } from "./tinhToan.js";

const ketQua = tinhToan(3,5)
document.getElementById("ketQua").innerText = ketQua

function click() {
  alert("hello");
}

// đăng ký hàm với window
window.clickHandle = click; // giúp window lấy biến cục bộ
// ko được trùng tên 
// ko được gọi là click nên phải đặt biến khác - clickHandle
// muốn dùng button 1 là window 2 là dom trên JS