// ds rỗng
let students = ["Hải", "Long", "Quân", "Hải", "Hoàng", "Hải"];

// ds có 5 phần tử null
let mentors = new Array(5).fill("MT"); // lấy đầy 5 thk đầu

mentors.push("hihi");
mentors[0] = "mt01";
console.log("✅ mentors", mentors);

console.log("✅ students", students);

// indexOf : tìm kiếm vị trí đầu tiên của phần tử => return ra vị trị
let viTri = students.indexOf("Hải");

console.log("✅ Vị trí của Hải: ", viTri);

// lastIndexOf :tìm kiếm vị trí cuối của phần tử => return ra vị trí

let viTriCuoi = students.lastIndexOf("Hải");
console.log("✅ Vị trí cuối của Hải: ", viTriCuoi);

// includes : kiểm tra mảng có chauw giá trị tương ứng hay không => true, false
console.log("Quân ?", students.includes("Quân"));
console.log("Lan ?", students.includes("Lan"));

// reverse: đảo ngược mảng  => thay danh sách ban đầu
// DC: az001 chưa ds các địa chỉ
// students.reverse()

let student_new = [...students].reverse();

console.log("👉 student_new", student_new);
//  THAM CHIẾU < THAM TRỊ

let students_v2 = students; // tạo biến mới tham chiếu vào cùng địa chỉ với thằng gốc

students_v2.push("Chương");

console.log("✅ student", students);
console.log("✅ student_v2", students_v2);

// tham trị  - primited value
let a = 10; // lưu ở stack : ac001
let b = a; // b= 10 tạo ra bản sao của a và lưu ở dc khác ac002

  b = 9; 
console.log("✅ a", a);
console.log("✅ b", b);

let functiona = () => {
    let a;
    let b;
};

let hoTen = "Nguyen Van A";
// xử lý đảo ngươc chuỗi
// split => tạo array
let arHoTen = hoTen.split("");

console.log("👉 arHoTen", arHoTen);
// ['N','g',...,'A']
// reverse => đảo ngược
arHoTen.reverse();
console.log("👉 arHoTen", arHoTen);

// join nối lại thành chuỗi => in ra
console.log("✅ Sau đảo ngược", arHoTen.join(""));
console.log("✅ Sau đảo ngược", hoTen.split("").reverse().join(""));
// output "A naV neyugN"

// vòng lăp
  let daoNguoc = "";
  for (let i = 0; i < hoTen.length; i++) {
    // i = 0    "N"
    // i = 1    g ==> g + N     => gN
    // i = 2    u ==> u + gN    => ugN
    daoNguoc = hoTen[i] + daoNguoc;
  }
  console.log("✅ Đảo ngược for", daoNguoc);

// vòng lăp for of : không quan tâm đến index
// chay lần lượt qua các phần tử bên trong
let daoNguoc2 = "";
for (let kyTu of hoTen) {
    daoNguoc2 = kyTu + daoNguoc2;
}
console.log("✅ Đảo ngược 2:  for", daoNguoc2);

// slice: dùng để cắt lấy 1 đoạn của mảng , không làm thay đổi gốc
// slice(vị trí bắt đầu, vị trí kết thúc)
let subject = ["java", "js", "html", "css", "c#", "python", "go"];
//                 0      1      2      3      4       5       6
let arrSub = ["C++", "angular", "php"];

let newSubject = subject.slice(2, 6); // lấy ra ptử tại idx  2, 3, 4, 5
console.log(newSubject);

let new1 = subject.concat(arrSub); // concat() dùng để nối 2 hoặc nhiều mảng lại với nhau

console.log("👉 subject", subject); // có thêm nd của arrSub
console.log("👉 arrSub", arrSub); // có thêm nd của arrSub

console.log("👉 new1", new1);

console.log("👉 subject", subject); // có thêm nd của arrSub
  console.log("👉 arrSub", arrSub); // có thêm nd của arrSub

  console.log("👉 new1", new1);

//for of : lấy ra phần tử
// for in : lấy ra index
for (let index in subject) {
    console.log(index, subject[index]);
}

// foreach
students.forEach((item) => {
    console.log(item);
});
//  filter dùng để lọc dữ liệu

let subjectWithC = subject.filter((item) => item.includes("go"));

console.log("👉 subjectWithC", subjectWithC);