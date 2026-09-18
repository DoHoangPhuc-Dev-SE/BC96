let demo = () => {
    // array để luu danh sách nhiều giá trị

    // dsĐiểm, ds tên , ds tuổi, ds giới tính, ds địa chỉ, ds nghề nghiệp, ds sở thích, ds môn học, ds điểm số, ds trạng thái
    let arr = [
        "Nga",
        20,
        "Nữ",
        "Hà Nội",
        "Sinh viên",
        "Đọc sách",
        "Toán, Lý, Hóa",
        9.5,
        "Đang học",
    ];
    // index 0 là tên
    // index 1 là tuổi
    // index 2 là giới tính
    // index 3 là địa chỉ ...
     console.log(arr[0]); // in ra tên
    console.log(arr[1]); // in ra tuổi
    console.log(arr[2]); // in ra giới tính
    console.log(arr[3]); // in ra địa chỉ
    
    //Ngoặc đơn “[ ]” là array
    //Ngoặc nhọn “{ }” là oject

    //object vẫn là 1 biến nhưng lưu được nhiều gía trị có ý nghĩa hơn, dễ quản lý hơn, dễ thao tác hơn
    // tên , tuổi, dc, giới tính , email, sdt ,...
    // chứa nhiều cặp  key : value, cách nhau bằng dấu ,

    // khởi tạo object
    let student = {
        // thuộc tính/Property : name, age, gender, address
        name: "Nga",
        age: 20,
        gender: "Nữ",
        address: "Hà Nội",

        // hành vi, phương thức/ method
        //method là 1 function trong object
        hello: () => {
        console.log("hello");
        },

        hello_v2: () => {
        // arrow function không có this riêng
        // this của arrow là windown

        console.log("👉 this", this);
        console.log("hello_v2 " + this.name);
        },
        // this chính là object hiện tại : là student ~ student.name

        hello_v3: function () {
        console.log("👉 this", this);

        console.log("hello_v3 " + this.name);
        },
    };

    // truy cập vào các giá trị trong object
    console.log(student.gender);
    console.log(student.name);
    console.log(student.age);
    console.log(student.address);
    console.log(student["address"]);

    // chỉnh sửa giá trị trong object
    student.age = 21;

    // thêm thuộc tính
    // thêm email, phone
    student.email = "phuongng@gmail.com";
    student.phone = "0999999999";

    // xóa thuộc tính
    delete student.address;

    student.hello(); // gọi hàm hello trong object
    student.hello_v2();
    student.hello_v3();
    console.log("✅ student", student);
};
demo();

// đối tượng cụ thể : student, house, product, movie .....

// tính toán, Math, ...
// object calc :
// thuộc tính : name, branch, color, isOn
// phương thức: add, sub, mul , div, turnOn, turnOf
let calc = {
    // thuôcj tính
    name: "Máy tính casio fx580vn",
    branch: "Casio",
    color: "Blue",
    isOn: false,
    // phương thức
    turnOn: function () {
        console.log(`✅ ON - ${this.name}`);
    },
    turnOff: function () {
        console.log(`✅ OFF - ${this.name}`);
    },
    add: function (a,b) {
         let tong = a + b;
        console.log("✅ Tổng", tong);
    },
    // rest param => number chính là 1 mảng
    add_v2: function (...numbers) {
        let sum = 0;
        for (let a of numbers) {
        sum += a;
        }
        console.log("✅ Tổng", sum);
    },
};

calc.turnOn();
calc.add(3, 5);
calc.add_v2(5, 3, 4, 7, 3, 1);
calc.turnOff();

let products = [
    {
        id: 1,
        name: "Macbook M4",
        price: 35000000,
        brand: "Apple",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjYV8rT0r0ffjAFIozbV40aqkhncYjf48agUzwGd1Mg&s",
    },
    {
        id: 2,
        name: "ROG Strix",
        price: 42000000,
        brand: "Asus",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREg9l3MQRMFV0b79FyX8KgD04StASUtgMKTxAPHdLnKVjIS-iipNKxu6G7qDJBCxSTiEagQkLpv-lmeT3M8b3ddz8o-q98PSMZok9Q69eviUAuqJkERa_-E8-RkTPCoF8xo8MlDkBfXA&usqp=CAc",
    },
    {
        id: 3,
        name: "Dell XPS",
        price: 30000000,
        brand: "Dell",
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8jba9TRrH4Mn4RfoSU0S0KzJAQTCpg95-dZZB-evBoeil03Cv-QZrVEQgwbILaFCgyfrWyrQy8h5t3XojTJKW9XMU6ppUnNcYDMM2OqolMXNBUpHA7j-NfoeSF8xmVmI-&usqp=CAc",
    },
];

let renderTable = () => {
    // chạy vòng lặp qua products
    let content = products?.map((item, index) => {
        // bóc tách phần tử - Destructuring
        // đổi tên tên_cũ (key trong obj) : tên_mới
        let { brand, id, img: image, name, price } = item;
        return `<tr>
                    <td>${index + 1}</td>
                    <td>${name}</td>
                    <td>${price.toLocaleString()} VND</td>
                    <td>${brand}</td>
                    <td><img width="80" src="${image}"></td>
                    <td>
                        <button class="btn btn-danger" onclick="deleteProduct(${id})">Xoá</button>
                    </td>
                </tr>`;
    });

    console.log("👉 content", content);
    document.getElementById("tbodyProduct").innerHTML = content.join("");
};
renderTable();

// add
let addProduct = () => {
    let name = dom("#txtName").value;
    let brand = dom("#txtBrand").value;
    let price = dom("#txtPrice").value;
    let img = dom("#txtImg").value;
    // cả hai cách đều tạo được object tương ứng
    let product = {
        id: Date.now(),
        name: name,
        brand: brand,
        price: price,
        img: img,
    };
    let product_v2 = {
        id: Date.now(),
        name, // name trùng tên với key trong object thì có thể dùng cách này
        brand,
        price,
        img,
    };
    products.push(product_v2);
    console.log("✅ Thêm thành công");
    renderTable();
    clearForm();

    console.log("👉 products", products);
};

// clearform : khi add vào là xóa thông tin đã nhập tăng trải nghiệm ng dùng

let clearForm = () => {
    dom("#txtName").value = "";
    dom("#txtBrand").value = "";
    dom("#txtPrice").value = "";
    dom("#txtImg").value = "";
};

// xoá : hàm tìm vị trí sản phẩm rồi xóa
let deleteProduct = (id) => {
  // nhận vào tham số là id
  // tìm xem trog ds có id này hay không
  //  có thì xoá phần tử có id tương ứng
  // không có thì thôi ,  -1

  let find = products.findIndex((item) => item.id == id);
  if (find != -1) {
    // xoá 1 phân tu tại ví trí find
    products.splice(find, 1);
    renderTable();
  } else {
    alert(`Không tìm thấy sp có id ${id}`);
  }
};

// dom
let dom = (sel) => {
  return document.querySelector(sel);
};

//Rest Parameter : gom lại
// => gom nhiều tham số thành arr
// 1,2,3,4 => [a,2,3,4]

//Spread Operator : trải ra
// spread => trải ra từ [1,2,3,4] => 1,2,3,4
// spread trải từng phần tử -> tạo cái mới với các phần tử tương ứng

let sv1 = {
    ten: "Nga",
    tuoi: "10",
    diaChi: {
        tinh: "HCM",
        huyen: "Ban Co",
    },
};

//let sv2 = sv1 // tham chiếu vào 1 object , sv2 thay đổi sv2 bị thay đổi theo
let sv2 = { ...sv1 }; // de

sv2.ten = "NGA";
sv2.tuoi = "26";

sv2.diaChi.tinh = "HN";

console.log("✅ sv1", sv1);
console.log("✅ sv2", sv2);

// merge
let contact = {
  sdt: "0888888888",
  email: "sv1@gmail.com",
  tuoi: "27",
};
// gom sv1 và contact lại với nhau
// merge: nếu trùng key thì sao,
// vd trung tuoi. vì ...contact đặt ở sau  nên contact sẽ ghi đè lên sv2
sv1 = {
  ...sv1,   //Gộp Object bằng cách sử dụng Spread Operator
  ...contact,
};

console.log("👉 sv1", sv1);

// Destructuring VD dòng 152-154