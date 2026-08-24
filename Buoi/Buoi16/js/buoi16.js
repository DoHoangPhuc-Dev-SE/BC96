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