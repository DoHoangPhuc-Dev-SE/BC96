console.log("===== Function Expression: ======");

//Cú pháp Function Declaration: function ten_function(){ than ham}
//Function Declaration có thể gọi trước khi khai báo:

//Cú Pháp fnc Expression
// gọi sau khai báo

let tinhTong = function (a, b) {
  console.log("===== Tinh tong ======");
  let tong = a + b;
  console.log(tong);

  return tong;
};

//  cách sử dùng : giống với fnc bình thường
let tong = tinhTong(10, 20);
console.log("👉 tong", tong);

// tinh tien (gia , soluong) trả về tổng tiền
let Sum = function(gia,SL) {
    return sum = gia * SL;
};

let TienBanhMi = Sum(10000,2);
let TienTraSua = Sum(15000,3);
console.log("👉Tiền bánh mì là ", TienBanhMi);
console.log("👉Tiền trà sữa là ", TienTraSua);

// =======[V3] ARROW FUNCTION ====
// hàm mũi tên
// let tinhTong = function(a, b){ return a+b }
let tinhTong_v3 = (a, b) => {
    return a + b
}
// cách dùng như cũ
console.log("✅ [ARROW] Tinh tong", tinhTong_v3(1,2));

// tối giản code
// chỉ có 1 dòng return thì có thể lượt bỏ {  return  }
let tinhTong_v4 = (a, b) => a + b
console.log("✅ tinhTong_v4", tinhTong_v4(2,3));
// chỉ có 1 tham số
// có thể bỏ () ở phần tham số
let tinhBinhPhuong = so => so * so
console.log("✅ tinhBinhPhuong", tinhBinhPhuong(4));

// kiemTraSoChan nhận vào 1 số => kiem tra chẵn lẻ

let kiemTraSoChan = (so) => {
//    if (so % 2 == 0) {
//        return true;
//    } else return false;
    return so % 2 == 0;
};
// tối ưu code
// let kiemTraSoChan_v2 = (so) => so % 2 == 0;

let kiemTraSoChan_v2 = so => so % 2 == 0 ? "Đây là số chẵn":"Đây là số lẻ";
console.log("✅ kiemTraSoChan_v2", kiemTraSoChan_v2(8));

let KTtuoi = (tuoi) => {
    if(tuoi >= 18) console.log("Đủ tuổi")
    else console.log("Ko Đủ tuổi")
}

let KTtuoi_v2 = tuoi => tuoi >= 18 ? "Đủ tuổi" : "Ko đủ tuổi"

// Default parameter (tham số mặc định)
// xinChao có giá trị dự phòng khi người dùng không truyền dữ liệu
// => hạn chế bị undefined

let xinChao = (name = "bạn") => {
    console.log("✅ Xin chào", name);
}

xinChao("Sumoi")
xinChao() // quên truyền

// ham tinh giam gia  (giaTien = 0 , phanTramGiam = 0)
let tinhGiamGia = (giaTien = 0, phanTramGiam = 0) => {
    let tienGiam = giaTien * phanTramGiam / 100
    let thanhTien = giaTien - tienGiam
    return thanhTien
}

console.log("✅ giam 20%", tinhGiamGia(100000, 20).toLocaleString());
console.log("✅ khong giam", tinhGiamGia(100000).toLocaleString());
console.log("✅ giam", tinhGiamGia(100000, 10).toLocaleString());

console.log("✅ khong co gi", tinhGiamGia().toLocaleString());
// Output nếu có default giaTien = 0: "✅ khong co gi 0"
// Output nếu KHÔNG có default giaTien: "✅ khong co gi NaN"

// callback function : 1 hàm được truyền vào hàm khác dưới dạng tham số
// hàm được gọi lại
// callback_fn : sẽ là 1 hàm nào đó bất kỳ
let thucHienChucNang = (callback_fn) => {
    console.log("✅ ==== Vào hàm callback ======");
    callback_fn();
    // () đại diện cho việc gọi hàm
    console.log("✅ ==== Kết thúc hàm callback ======");
};

// 
thucHienChucNang(xinChao);

// callback có dữ liệu
let hienThiKetQua = ketQua =>{
    console.log("✅ ketQua", ketQua);
}

let hienThiKetQuaDep = ketQua =>{
    console.log("======= Kết quả =======");
    console.log(ketQua);
    console.log("======= END =======");
}

let tinhTong_cb = (a, b, fnc) =>{
    let tong = a + b
    fnc(tong)
}

tinhTong_cb(3, 5 , hienThiKetQua)
// tong = 8 => hienThiKetQua(8) =>
tinhTong_cb(30, 5 , hienThiKetQuaDep)

// kết hợp với DOM

// document.querySelector("#btn").onclick = function() {

// }

// Bài tập
// document.querySelector("#btn_id").onclick= function(){
//    console.log("✅ label");
// }

let test = ()=>{
    console.log("✅ hello button");
}