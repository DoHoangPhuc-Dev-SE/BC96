dom("#r1").innerText = "Hello 1"
dom("#r2").innerText = "Hello 2"
dom("#r3").innerText = "Hello 3"
dom("#r4").innerText = "Hello 4"

//  đưa document.querySelector thành function
function dom(sel){
    return document.querySelector(sel)
}

let a = 10, b = 20
tong(a,b)
tong(14,88)

//Cú pháp khai báo function
function tong(a,b) {
    console.log("a + b =", a + b )
}

function reload() {
  console.log("Vui long reload lại trang website");
}

reload();
reload();
reload();
reload();
reload();


// CÁC LOẠI FUNCTION

// function return
// function tham số

    // Có Tham Số
    // function tong(a, b) : 2 tham số a và b
    // function xinChao(name): tham số name

    // không tham số
    // function reload() 
    // function test()

// xin chào tên_nguoi_dung
function xinChao(ten){
    console.log("Xin chào ", ten)
}

// gọi hàm
xinChao("Sumoi")  // truyền tham số vào cho hàm
xinChao(8)

// tính diện tích hình chữ nhật
// input là dài , rộng , tính xong thì console.log ra kết quả

function dienTichHCN(dai, rong) {
    let s = dai * rong;
    // ${biến} dùng để nhúng trực tiếp giá trị của biến vào trong chuỗi mà không cần dùng dấu cộng + để nối chuỗi.
    console.log(`Dien tich hình chu nhat dài = ${dai}, rộng = ${rong} là ${s} `);
}

// gọi hàm với dài = 3 rộng = 5
// 3 và 5 là giá trị truyền vào / argument / đối số
dienTichHCN(3, 5);


// tính điểm trung bình
function dtb(toan, ly, hoa) {
    let diem = (toan + ly + hoa) / 3;
    // .toFixed(2) : dùng để lấy 2 số sau dấu .
    console.log(`Điểm trung bình là : ${diem.toFixed(2)}`);
    return diem; // để lại 1 giá trị
    // vừa trả về vừa kết thúc
}

let dToan = 10, dHoa = 8, dLy = 7;

dtb(dToan, dLy, dHoa);

// hàm xếp loại dựa trên điểm trung bình
function xepLoai(diemTB) {
    let kq = "";
    if (diemTB >= 8) {
        kq = "giỏi";
    } else if (diemTB >= 7) {
        kq = "Khá";
    } else if (diemTB >= 5) {
        kq = "trung bình";
    } else {
        kq = "yếu";
    }

    console.log("👉 kq", kq);
}

// sử dụng xepLoai
xepLoai(dtb(dToan, dLy, dHoa));

// ========== function return ============
// tính tổng 2 sô trả về giá trị
function Tinhsum(a,b) {
    return a + b;
}
let sum = Tinhsum(14,8)
// return nên khai báo biến để hứng giá trị