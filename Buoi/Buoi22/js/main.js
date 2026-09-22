// sv1  maSV, hoten, diemToan, diemLy, diemHoa, tinhDiemTB()
// tạo 2 obj
let sv1 = {
  maSV: "SV001",
  hoTen: "Nguyễn Văn A",
  diemToan: 10,
  diemLy: 9,
  diemHoa: 10,

  tinhDiemTB: function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  },
};

let sv2 = {
  maSV: "SV002",
  hoTen: "Nguyễn Văn B",
  diemToan: 8,
  diemLy: 9,
  diemHoa: 6,

  tinhDiemTB: function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  },
};
let sv3 = {
  masv: "SV002",
  hoTen: "Nguyễn Văn B",
  diemToan: 8,
  diemLy: 9,
  diemHoa: 6,

  tinhDiemTB: function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 2;
  },
};
console.log("✅ sv1", sv1);
console.log("✅ sv2", sv2);
console.log("✅ sv3", sv3);

// khi các object cần phải chung 1 cấu trúc  thì => OOP để quy định khuôn mẫu
// class oop
// class: giống như 1 cái khung mẫu để tạo ta các object có chung đặc điểm và hành vi
//             CLASS
//            SinhVien
//                │
//       ┌────────┼────────┐
//       ↓        ↓        ↓
//      sv1      sv2      sv3
//    Object   Object   Object
// Constructor: hàm khởi tạo , nếu không khai báo thì vẫn có constructor mặc định
// Mentor : Ma, hoTen, email, sdt, dc,,...
// Giang  : Ma, hoTen ,email, sdt, dc,,...

class SinhVien {
  maSV = "";
  hoTen = "";
  // email, sdt, dc,...
  diemToan = 0;
  diemLy = 0;
  diemHoa = 0;
  // contructor - hàm khởi tạo
  // SinhVien()
  constructor(maSV = "", hoTen = "", diemToan = 0, diemLy = 0, diemHoa = 0) {
    console.log("✅ constructor SinhVien");
    this.maSV = maSV;
    this.hoTen = hoTen;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
  }
  getDiemToan() {
    return this.diemToan;
  }
  // phương thức / hành vi / method
  tinhDiemTB() {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  }
  xepLoai() {
    let dtb = this.tinhDiemTB();
    if (dtb >= 8) return "Giỏi";
    if (dtb >= 6.5) return "Khá";
    return "Trung bình";
  }
}

// khởi tạo object có kiểu SinhVien
let sv4 = new SinhVien();
sv4.diemToan = 10;
sv4.diemLy = 10;
sv4.diemHoa = 10;
sv4.maSV = "SV004";
sv4.hoTen = "Nguyen Van 4";

let sv5 = new SinhVien("SV005", "Nguyen Van 5", 10, 4, 7); // chạy contructor
let sv6 = new SinhVien();

console.log("👉 sv4", sv4);
console.log("👉 sv5", sv5);
console.log("👉 sv6", sv6);
console.log("👉 sv6", sv6.diemHoa * 2);

// JS dễ tính nhận dư tham số ko có lỗi như những ngôn ngữ LT khác

let sv7 = new SinhVien();
let sv8 = new SinhVien("SV008"); // nhận 1 tham số => maSV = SV008, những field còn lại lấy giá trị default
let sv9 = new SinhVien("SV009", "Chín"); // nhận 2 tham số => maSV, hoTen, những field còn lại lấy giá trị default

console.log("👉 sv7", sv7, sv7.xepLoai());
console.log("👉 sv8", sv8, sv8.xepLoai());
console.log("👉 sv9", sv9);

// KẾ THỪA -
// extends
// Class con kế thừa class cha , hưởng những thuộc tính và phương thức của class cha

//

//
//            NguoiDung () - class cha
//                │
//       ┌────────┼────────┐  - class con
//       ↓        ↓        ↓
//    SinhVien   Mentor  GiangVien

class Nguoi {
  ten;
  //  cccd thanh private
  #cccd;    // # : thuộc tính riêng tư
  constructor(ten, cccd) {
    this.ten = ten;
    this.#cccd = cccd;
  }
}
class Mentor extends Nguoi {
  maMT;
  constructor(maMT, ...param) {
    //  dùng ...param giúp class con Mentor chuyển tiếp toàn bộ các thông tin của class cha (Nguoi) cho super() một cách ngắn gọn
    super(...param); // gọi contructor của class cha
    this.maMT = maMT;
  }
}

let mt = new Mentor("MT001", "Nga", "123123123");
mt.dtb = 10; 

console.log("👉 mt", mt);
// console.log("👉 mt", mt.#cccd);

// NhanVien : manv , hoten , luong cb, tinhLuong
class NhanVien {
  constructor(maNV, hoTen, luongCB) {
    this.maNV = maNV;
    this.hoTen = hoTen;
    this.luongCB = luongCB;
  }

  tinhLuong() {
    return this.luongCB;
  }
}

// QuanLy : manv , hoten , luong cb, tinhLuong(), soluongnv
class QuanLy extends NhanVien {
  constructor(soLuongNV, maNV, hoTen, luongCB) {
    super(maNV, hoTen, luongCB);
    this.soLuongNV = soLuongNV;
  }
  tinhLuong() {
    return this.luongCB * this.soLuongNV;
  }
}

// Seller :  manv , hoten , luong cb, tinhLuong, banHang(), KPI
class Seller extends NhanVien {
  constructor(kpi, maNV, hoTen, luongCB) {
    super(maNV, hoTen, luongCB);
    this.kpi = kpi;
  }
  tinhLuong() {
    return this.luongCB + this.luongCB * this.kpi;
  }
}
// cùng 1 ham tinh luong nhung có nhieu cach tinh => da hinh

//BT
// trừu tượng : giấu đi phần chi tiết : abstract
// JS ko cung cấp kỹ phần này

let dsnv = [
  new QuanLy(10, "QL001", "Tran Van Hao", 5310000),
  new Seller(0.9, "SL002", "Nguyen Thi Lan", 5310000),
  new Seller(0.9, "SL004", "Nguyen Van Bon", 5310000),
  new Seller(1.5, "SL003", "Le Kang Huy", 5310000),
];

let renderTable = (ds) => {
  let html = ds.map((item, i) => {
    let { maNV, hoTen, luongCB } = item;

    // instanceof : kiem tra obj thuoc class nào
    let loai = item instanceof QuanLy ? "Quản lý" : "Seller";
    let thongTinThem =
      item instanceof QuanLy
        ? `quản lý ${item.soLuongNV} nhân viên`
        : `KPI:  ${item.kpi * 100} %`;

    return ` <tr>
                <td>${maNV}</td>
                <td>${hoTen}</td>
                <td>${loai}</td>
                <td>${luongCB}</td>
                <td>${thongTinThem}</td>
                <td>${item.tinhLuong().toLocaleString()} VNĐ</td>
                <td>
                    <button class="btn btn-info btn-sm" onclick="suaNV('${item.maNV}')">
                        Sửa
                    </button>
                    <button class="btn btn-danger btn-sm">
                        Xóa
                    </button>
                </td>
            </tr>`;
  });
  document.querySelector("#tbodyNhanVien").innerHTML = html.join("");
};
let changeType = (e) => {
  console.log("✅ e", e);
  let groupQL = document.getElementById("groupQuanLy");
  let groupSL = document.getElementById("groupSeller");

  console.log("✅ ", document.querySelector("#loaiNV"));
  // cho nó none hết vào trong if else xử lý
  if (e.value == "quanly") {
    // bật input của groupQuanLy
    groupQL.classList.remove("d-none"); // d-none : Ẩn hoàn toàn thẻ HTML khỏi giao diện
    groupSL.classList.add("d-none");
  }

  // seller thì bỏ dnone của seller đi
  else if (e.value == "seller") {
    groupSL.classList.remove("d-none");
    groupQL.classList.add("d-none");
  }
};

// them NV
let themNV = () => {
  let obj = layThongTinForm()
  if(!obj) return
  dsnv.push(obj);
  // thông báo thành công
  hienThongBao(`Thêm mới ${loaiNV} thành công`, "success");
  renderTable(dsnv); // render lại để thấy ds nv mới
};

// hàm báo lỗi
// loai danger, success, warring
let hienThongBao = (message, loai) => {
  let thongBao = document.getElementById("thongBao");
  thongBao.innerText = message;
  thongBao.className = `alert alert-${loai} mt-4 mb-0`;
};

// sua NV
// bấm nút sửa -> fill thông tin lên UI -> thay đổi thông tin -> lưu -> lưu lại vào ds -> render lại UI
// lấy
let suaNV = (id) => {
  console.log(id); // nhan vao id
  // find trả ra phần tủ nếu tìm thấy , không tìm thấy thì null
  // find trả ra object cần tìm
  let find = dsnv.find((item) => item.maNV === id);
  console.log("✅ find", find);

  // fill thông tin lên input

  document.getElementById("maNV").value = find.maNV;
  document.getElementById("hoTen").value = find.hoTen;
  document.getElementById("luongCB").value = find.luongCB;

  //select tương ứng
  if (find instanceof QuanLy) {
    // thì bật input của groupQuanLy và gắn value tương ứng
    // chỉnh select
    document.getElementById("loaiNV").value = "quanly";
    // là quản lý thì set thêm giá trị cho
    document.getElementById("soLuongNV").value = find.soLuongNV;
  }
  if (find instanceof Seller) {
    document.getElementById("loaiNV").value = "seller";
    // là seller thì set thêm giá trị cho inout tương ứng
    document.getElementById("kpi").value = find.kpi;
  }
  changeType(document.querySelector("#loaiNV"));

  // dispable input manv
  document.getElementById("maNV").disabled = true;
  document.getElementById("btnAdd").disabled = true;
  document.getElementById("btnUpdate").disabled = false;

  // kpi / soluongNV
};
let capNhatNV = () => {
    // lấy input , kiểm tra dữ liệu khác rỗng ... 
  let obj = layThongTinForm()
  
  console.log("👉 obj", obj);
  if(!obj) return
  // tìm xem các id tương ứng trong ds là thằng nào -> up date vào ds
  let find = dsnv.findIndex(item => item.maNV == obj.maNV)
  if(find == -1){
    //báo lỗi
    hienThongBao("Không tìm thấy nv cần sửa", 'warning')
    return
  }
  dsnv[find] = obj
  renderTable(dsnv)
  reset()

};

let layThongTinForm = () => {
// lấy thông tin từ form
  let maNV = document.getElementById("maNV").value;
  // hoTen, luongCB, loaiNV, soLuongNV, kpi
  let hoTen = document.getElementById("hoTen").value;
  let luongCB = document.getElementById("luongCB").value;
  let loaiNV = document.getElementById("loaiNV").value;
  let soLuongNV = document.getElementById("soLuongNV").value;
  let kpi = document.getElementById("kpi").value;
  // validation maNV, hoTen,Luong
  const maNVRegex = /^[a-zA-Z0-9_-]{3,20}$/; // chữ và _ và 3-> 20 ký tự
  const hoTenRegex = /^[\p{L}]+(?:\s+[\p{L}]+)*$/u; // regex hoten tiếng viêtj có khonag trắng
  const soNguyenRegex = /^\d+$/;
  const soThapPhanRegex = /^\d+(?:[.,]\d+)?$/;
  if (!maNV || !hoTen || !luongCB) {
    // hiển thị thông báo lỗi
    hienThongBao(
      "Vui lòng nhập đầy đủ mã, họ tên và lương nhân viên",
      "danger",
    );
    return null;
  }
  if (!hoTenRegex.test(hoTen)) {
    hienThongBao("Họ tên chỉ được chứa chữ cái", "danger");
    return null; // lỗi nên thoat luôn
  }
  // bổ sung thêm regex tương ứng
  let obj;
  if (loaiNV == "quanly") {
    //
    obj = new QuanLy(soLuongNV, maNV, hoTen, luongCB);
  } else if (loaiNV == "seller") {
    obj = new Seller(kpi, maNV, hoTen, luongCB);
  } else {
    // báo lỗi
    hienThongBao("Bạn chưa chọn loại nhân viên", "danger");
    return null;
  }
  return obj
}
let reset = () => {
  // dọn nội dung cua rinput 
  document.getElementById("maNV").value = "";
  document.getElementById("hoTen").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("loaiNV").value = "";
  document.getElementById("soLuongNV").value = 0;
  document.getElementById("kpi").value = "";
  // reset button
  document.getElementById("maNV").disabled = false;
  document.getElementById("btnAdd").disabled = false;
  document.getElementById("btnUpdate").disabled = true;
};
// xoa NV

renderTable(dsnv);

let search= () => { 
  let text = "Van" // giả sử lấy được từ input
  // tìm ra ds tên có chưa từ "văn"
  let newds = dsnv.filter(item => item.hoTen.includes(text))
  
  console.log("👉 newds", newds);
  // renderTable(newds)
 }
 search()