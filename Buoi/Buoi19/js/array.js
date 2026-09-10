let height_sv1 = 150
// array : 1 biến chứa nhiều giá trị
// variable : biến chứa 1 giá trị
//
let arrHeight = [150, 165, 145, 170]
console.log("✅ arr", arrHeight);
console.log("✅ label", height_sv1);

// truy cập phần tử

console.log("👉 arrHeight[0]", arrHeight[0]);
console.log("👉 arrHeight[1]", arrHeight[1]);
console.log("👉 arrHeight[2]", arrHeight[2]);
console.log("👉 arrHeight[3]", arrHeight[3]);
console.log("👉 arrHeight[4]", arrHeight[4]);// vượt ra khỏi index của array -> undefined

// chiều dài length
console.log("✅ chiều dài", arrHeight.length);
let doDai = arrHeight.length

// truy cập phần tử cuối cùng của arr
console.log("✅ Phần tử cuối", arrHeight[doDai - 1]);

// sửa dữ liệu
arrHeight[2] = 180

console.log("👉 arrHeight[2] sau khi thay đổi", arrHeight[2]);


// DUYỆT MẢNG
let dsTen = ["SV A","SV B","SV C","SV D","SV E"]
// in ra ds tê của các sinh viên
console.log("✅ dsTen[0]", dsTen[0]);
console.log("✅ dsTen[1]", dsTen[1]);
console.log("✅ dsTen[2]", dsTen[2]);
console.log("✅ dsTen[3]", dsTen[3]);
console.log("✅ dsTen[4]", dsTen[4]);

for(let i = 0; i < dsTen.length ; i++){
    let item = dsTen[i];
    console.log(`✅ Tên của sinh viên thứ ${i + 1}`, item);
}

// thêm phần tử vào cuối
// Hải , Hoàng
dsTen.push("Hải") // thêm "Hải" vào cuối danh sách
dsTen.push("Hoàng")

// thêm 1 lần 2 bạn
// "Nhật", "Quân"

dsTen.push("Nhật","Quân")
dsTen.push(100)
dsTen.push(true)
// ...
// tính tổng 2 số, ...items: int[]

console.log("✅ SAU KHI THÊM HẢI VÀ HOÀNG ");
for (let i = 0; i <= dsTen.length - 1; i++) {
    console.log(dsTen[i]);
}

// xoá phần tử
// xoá 100 , true

// pop - xoá phần tử cuối cùng của mảng và trả ra phần tử đó

let itemPop = dsTen.pop();

console.log("👉 itemPop", itemPop);

console.log("✅ SAU KHI POP - xoá cuối ");
for (let i = 0; i <= dsTen.length - 1; i++) {
    console.log(dsTen[i]);
}

// xoá đầu - shift xoá phần tử đầu của mảng và trả ra phần tử đó
let itemFirst = dsTen.shift();

console.log("👉 itemFirst", itemFirst);
// thêm vào đầu - unshift
dsTen.unshift("Chương")
for (let i = 0; i <= dsTen.length - 1; i++) {
    console.log(dsTen[i]);
}

// thêm / xoá / sửa vị trí bất kỳ splice

// ['Chương', 'SV B', 'SV C', 'SV D', 'SV E', 'Hải', 'Hoàng', 'Nhật', 'Quân', 100]
//      0        1       2       3       4      5       6        7       8      9

// XOÁ tại vị trí bất kỳ
// xoá phần tử có index = 3

// dsTen.splice(vị trí cần thao tác, số phần tử cần xoá)
dsTen.splice(3, 1);
console.log("✅ SAU KHI XOÁ VỊ TRÍ SỐ 3");
console.log(dsTen);

// Thêm phần tử tại trí bất kỳ

// dsTen.splice(vị trí cần thao tác, 0 ,phần tử cần thêm)
dsTen.splice(1, 0, "Nga","Nga 1", "Nga 2");


console.log("✅ SAU KHI Thêm VỊ TRÍ SỐ 1");
console.log(dsTen);

// sửa phần tử tại vị trí
// dsTen[3] = "Anonymous"
dsTen.splice(3, 1, "Anonymous");
console.log("✅ SAU KHI UPDATE VỊ TRÍ SỐ 3 -> Anonymous");

console.log(dsTen);

// BIẾN DÙNG CHUNG
let item, index;
let ds = [];

let layInput = () => {
  item = dom("#txtItem").value;
  index = dom("#txtIndex").value;
};

// hàm thêm đầu , thêm cuối , thêm tại vị trí

let themDau = () => {
  layInput();
  ds.unshift(item);
  alert("thêm thành công vào đầu");
  showRes();
};

let themCuoi = () => {
  layInput();
  ds.push(item);
  alert("thêm thành công vào cuối");
  showRes();
};

let themIndex = () => {
  layInput();
  ds.splice(index, 0, item);
  alert(`Đã thêm phần tử ${item} và vị trí ${index}`);
  showRes();
};

let dom = (sel) => {
  return document.querySelector(sel);
};
let showRes = () => {
  let content = "";
  for (let i = 0; i < ds.length; i++) {
    content += ds[i] + ", ";
  }
  dom("#bt1Resuld").innerText = content;
};

/// hàm bật tắt divIndex theo giá trị của select

let onChangeType = () => {
  let value = dom("#txtType").value;
  if (value == 3) {
    dom("#divIndex").classList.remove("d-none");
  } else {
    dom("#divIndex").classList.add("d-none");
  }
};

//sort - làm thay đổi ds ban đầu
// sx theo unicode

let sortDemo = () => {
  let ds = [10, 1, 2, 20, 1999];
  let fruits = ["Orange", "Apple", "Banana"];

  fruits.sort();
  ds.sort();
  console.log("✅ fruits", fruits);
  console.log("✅ ds", ds);

  //  muốn sort từ lớn đến nhỏ và ngược lại với số thì phải triển khai thêm hàm
  // trước trừ sau : tăng dần
  // sau trừ trước : giảm dần
  ds.sort((a, b) => a - b);

  // function(a,b){
  //   return a-b
  // }

  // a b
  // 10 và 1
  // 10 - 1 = 9
  // 9 < 0 -> giữ nguyên vị trí
  // 9 > 0 => đổi chỗ  10 > 1 thì đổi chỗ
  // 9 = 0 thì giữ nguyên vị trí
  // => 1, 10, 2, 20 , 1999
  // 10 - 2 > 0 => 1, 2, 10,...
  // 10 - 20 => < 0
  console.log("✅ Sau khi sx đúng");
  console.log("✅ ds", ds);

  let ds2 = [1, 5, 3, 8, 7];

  ds2.sort((a,b)=> b-a)

  // b - a
  // 1 và 5  5 - 1 = 4 > 0 => 5,1,3,..
  // 1 và 3  3 - 1 = 2 > 0 => 5,3,1,8,...
  // 1 và 8  8 - 1 = 7 > 0 => 5,3,8,1,7
  // 1 và 7  7 - 1 = 6 > 0 =>  ....
  // ........


  console.log("✅ Sau khi sx đúng");
  console.log("✅ ds2", ds2);
};

sortDemo();

// split - cắt chuỗi -> array
let chuoi = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, odit!"
// cắt chuoi thanh arr , 
let arrChuoi = chuoi.split(" ")

console.log("👉 arrChuoi", arrChuoi);


// có array -> chuỗi 
let chuoiNew = arrChuoi.join("_")

console.log("👉 chuoiNew", chuoiNew);