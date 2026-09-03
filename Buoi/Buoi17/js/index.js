console.log("✅========== LOOP ==========");
// for
for (i = 0; i < 50 ; i++) {
    console.log("👋 Hello", i);
}

// tính tổng từ 1 đến n
// n nhập từ prompt
let totalFrom1ToN = () => {
    let n = Number(prompt("Nhập n: "));
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    console.log(`Tổng từ 1 đến ${n} là: ${total}`);
};
totalFrom1ToN();

// while

let while0to5 = () => {
    let i = 0;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}
while0to5();

let login = () => {
    let otp = "";
    while ( otp != "123") {
        otp = prompt("Nhập otp : ");
    }
    console.log("Nhập thành công");
}
login();

// do while 

let loginDoWhile = () => {
    let otp;
    do {
        otp = prompt("Nhập otp: ");
    } while (otp != "1234");
    console.log("✅ Đã xác nhận OTP thành công");
};

loginDoWhile();

/*
tiêu chí            for                     while                   do while
kiểm tra DK         trước                   trước                   sau
Chạy ít nhất 1 lần  Ko                      ko                      có
dùng khi nào        biết trước lần lặp      ko biết trc lần lặp     phải chạy ít nhất 1 lần
*/