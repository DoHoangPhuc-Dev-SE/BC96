let demo = () => {
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
  //               0      1      2      3      4       5       6
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

  // reduce : gộp nội dung thành phần tử, tính toán

  let numbers = [1, 2, 3, 4, 5];

  // Cú phap
  // reduce((ket_qua_tam_thoi, phanTu)=>{
  //     return ketquatam
  // },giatrikhoitao)

  let sum = numbers.reduce((a, b) => {
    return a + b;
  }, 0);
  //          a               b           return
  // L1:      0               1           1
  //L2        1               2           3
  //L3        3               3           6
  // L4       6               4           10
  //L5        10              5           15

  console.log("👉 sum", sum);
};

// BÀI TẬP

// Tìm số lớn nhất
let findMax = () => {
  let numbers = [7, 3, 9, 7, 2];
  let max = numbers.reduce((acc, cur) => {
    // l1 acc = 7, cur = 3
    // acc > cur ? acc : cur
    if (acc > cur) {
      return acc;
    } else {
      return cur;
    }
    // return acc > cur ? acc : cur
  }, 0);
  console.log("✅ max", max);
};
findMax();

// đếm số phần tử
let countItem = () => {
  let numbers = [7, 3, 9, 7, 2];
  let count = numbers.reduce((dem, phanTu) => {
    return (dem = dem + 1);
  }, 0);

  console.log("👉 count", count);
};
countItem();

// ghép chuỗi
let sentence = () => {
  let words = ["I", "love", "JavaScript"];

  let res = words.reduce((acc, cur) => {
    // acc ="I" cur = "love" => "I love"

    return acc + " " + cur;
  });
  console.log("✅ res", res);
};
sentence();

// global

let ds = [3, 5];

// thêm
let add = () => {
  // lấy ra giá trị cần thêm
  let input = dom("#txtNumber").value;
  ds.push(input);
  show(ds, "ds"); // gọi lại hàm để hiển thị ds mới
};

// tăng dần
let sortAsc = () => {
  // sort -> thay đổi ds gốc
  let newArr = [...ds].sort((a, b) => a - b);
  show(newArr, "result");
};

//giảm dần
let sortDesc = () => {
  // sort -> thay đổi ds gốc
  let newArr = [...ds].sort((a, b) => b - a);
  show(newArr, "result");
};

// tổng số chẳn
let totalSumEven = () => {
  // 2 3 4
  let sum = ds.reduce((total, current) => {
    //      total   current res
    // l1   0       2       2
    // l2   2       3       2
    // l3   2       4       6
    if (current % 2 == 0) {
      return (Number(total) + Number(current));
    }
    return Number(total)
  }, 0);
  alert(sum);
};

// số bội của 3
let boiCua3 = () => {
  let dem = ds.reduce((count, cur) => {
    if (cur % 3 == 0) {
      return (count = count + 1);
    }
    return count
  }, 0);
  alert(dem);
};

let show = (arr, id) => {
  let content = arr?.map((item) => {
    return `<span class="badge bg-primary me-2 mb-2">${item}</span>`;
  });

  console.log("👉 content", content);
  dom(`#${id}`).innerHTML = content?.join("");
};
let dom = (sel) => {
  return document.querySelector(sel);
};
show(ds, "ds");