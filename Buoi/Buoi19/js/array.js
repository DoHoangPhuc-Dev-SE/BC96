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