// TINH LUONG

// input : số ngày làm , lương 1 ngày

let LuongMotNgay = 100000;
let SoNgayLam = Number(prompt("Nhập số ngày làm :"))

// process : luong = songaylam * luong1ngay
let luong = SoNgayLam * LuongMotNgay;

// output : luong
console.log(`Lương của bạn khi làm ${SoNgayLam} ngày là ${luong.toLocaleString()} VND`);