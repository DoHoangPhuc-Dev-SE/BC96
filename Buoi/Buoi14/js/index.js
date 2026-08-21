// string : chuỗi
// number : số
// NULL :
// undefined
// object
// {
//     name : "Sumoi";    
//     age : 19;
// }
// boolean

//
let nong = true; // có nóng
console.log(typeof nong) // boolean

// Cấu trúc ĐK
if(nong) console.log("Bật máy lạnh")
    else console.log("Tắt máy lạnh")

// Truthy và falsy

// "" (chuỗi rỗng), 0, null, undefined, NaN  ==> falsy
// "Sumoibel", 1,2,-147, {} (object), [], '0'   ==> truthy

// Toán tử so sánh
// > < >= <= == === != !== : KQ của phép SS là boolean
console.log("======= Toán tử SS =======")
// == ===
console.log(1 == "1") // SS giá trị                     // true
console.log(1 === "1") // SS giá trị và kiểu dữ liệu    // false
console.log(1 === 1)    // = giá trị và kiểu dữ liệu    // true

// != !==
console.log(14 != "14") // SS giá trị                     // false
console.log(14 !== "14") // SS giá trị và kiểu dữ liệu    // true

// Toán tử logic
// !  &&  ||

// ! : phủ định
// !true ==> false
// !0 ==> true
console.log("====== Toán tử logic =========")
console.log(!true)  //  false
console.log(!0)     //  true
console.log(!1)     //  false
console.log(!false) //  true

// && : và
// Muốn đúng phải đúng hết
console.log(true && true) //    ==> true
console.log("hello" && 1) // true && truthy  ==> truthy // 1
console.log(0 && 1) // false && true  ==> false // 0
console.log(true && false) //  ==> false

// || : hoặc
// Chỉ cần 1 ĐK đúng là đúng hết
// true || false || false ==> true
console.log(true || false) //  ==> true

// BT ôn if else
//Giao diện HTML cho phép nhập độ tuổi  ==> đủ tuổi tham gia bằng xe máy > 50cc

//Có giao diện -> bấm button kiểm tra -> lấy giá trị từ input -> kiểm tra if else
    // Đủ thì ND màu xanh ngược lại màu đỏ

document.querySelector("#checkAge").onclick = function() {
    // lấy giá trị từ input
    let age = document.querySelector("#age").value
    let kq = ""
    // kiểm tra
    console.log(age >= 18) // lớn hơn || = 18
    if(age >= 18){ 
        kq = "Đủ tuổi lái xe máy > 50cc"
    }
    else{
       kq = "Ko đủ tuổi lái " 
    } 
    document.querySelector("#result1").innerText = kq
    // output

}