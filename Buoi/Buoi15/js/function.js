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