// BREAK CONTINUE

// continue
// 30 tầng -> xây 1-> 3, 5-> 12, 14->30
// không có tầng 4 và tầng 13
for (let i = 1; i <= 30; i++) {
    if (i == 4 || i == 13) {
        continue // bỏ qua lần lặp này -> đi đến lần lặp tiếp theo
    }
    console.log("✅ Tầng", i);
}

// break
let quyDen = 200000;
for (let i = 1; i <= 30; i++) {

    //nếu như quyden < 21000 thì không mua cf nữa
    // => ngưng vòng lặp, ngưng trừ tiền
    if (quyDen < 21000) {
        break;
    }
    quyDen -= 21000;
}

console.log("✅ Quỹ đen", quyDen);