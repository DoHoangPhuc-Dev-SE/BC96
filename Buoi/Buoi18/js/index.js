//  FUNTION TÍNH GIAI THỪA
let tinhGiaiThua = () => {
  // console.log("✅ label");
  // lay ra n tu input
  let soN = dom("#txtGiaiThua").value;
  let kq = 1;

  // chạy vong lap de tinh giai thua
  // for
  // for(let i = 1; i<=soN;i++){
  //   kq*=i;
  // }
  // while
  // let i = 1;
  // while (i <= soN) {
  //   kq*=i
  //   // b4: thay doi bien dem
  //   i++;
  // }
  // do while
  let i = 1;
  do {
    kq *= i;

    i++;
  } while (i <= soN);
  dom("#kqGiaiThua").innerText = kq;
};

//
let dom = (sel) => {
  return document.querySelector(sel);
};

let bt4 = () => {
  let content = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      //bg-danger
      content += `<div class="bg-danger">${i}</div>`;
    } else {
      //bg-success
      content += `<div class="bg-success">${i}</div>`;
    }
  }
  dom("#cau4").innerHTML = content;
};
let bt5 = () => {
  let total = 0;
  // let n;
  // let i = 1

  // for(i = 1; total <= 10000; i++){
  //   total+=i;
  //   //l1: 1
  //   //l2: 3
  //   //l3: 6
  //   //l4: 10
  //   //l5: 15
  //   n=i
  // }

  //  while
  let n = 0;
  while (total <= 10000) {
    n++;
    total += n;
  }

  dom("#cau5").innerHTML = n;
};
let bt6 = () => {
  let x = dom("#bt5_txtX").value;
  let n = dom("#bt5_txtN").value;
  let total = 0;

  for (let i = 1; i <= n; i++) {
    // total += Math.pow(x, i)
    total += x ** i;
  }
  dom("#cau6").innerHTML = total;
};

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

// ⭐ ⭐ ⭐ ⭐ ⭐
// ⭐ ⭐ ⭐ ⭐ ⭐
// ⭐ ⭐ ⭐ ⭐ ⭐

// STEP 1: in ra 5 ngôi sao trên 1 dòng
// vòng lặp chạy từ 1 -> 5

// STEP 2: in ra 3 dòng STEP 1
// vòng lặp từ 1 -> 3

let hinhChuNhat = () => {
  let content = "\n";

  for (let dong = 1; dong <= 3; dong++) {
    // in ra 5 star trên 1 dòng
    for (let i = 1; i <= 5; i++) {
      content += "⭐ ";
    }
    content += "\n";
  }
  console.log(content);
};
hinhChuNhat();

// n = 5
// ⭐ 
// ⭐ ⭐ 
// ⭐ ⭐ ⭐ 
// ⭐ ⭐ ⭐ ⭐ 
// ⭐ ⭐ ⭐ ⭐ ⭐ 

let hinhTamGiac = () => {
  let n = 5;
  let content = "\n";

  for (let dong = 1; dong <= n; dong++) {
    for(let i = 1; i <= dong; i++ ) {
       content += "⭐ ";
    }
    content += "\n";
  }

  console.log(content);
};

hinhTamGiac();

// in ra bang cuu chuong tu 2 -> 9

// cho in ra 1 bang cuu chuong 2 truoc

let bCC = () => {
  let content = "";
  for(let n = 2; n <= 9; n++) {
    content += `--- BẢNG CỬU CHƯƠNG ${n} ---\n`;
  for(let i = 1; i <= 10;i++) {
    content += `${n} * ${i} = ${n * i}\n`;
  }
  }
  console.log(content)
}
bCC();