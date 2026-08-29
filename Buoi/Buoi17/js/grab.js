// grabType : loại xe
// txtKm: số KM
// txtWait: số phút chờ

// 1: Grab Car
// 2: Grab SUV
// 3: Grab Black

//tinh tien -> dom ket qua len #result
// anfn : tao nhanh arrow function , chua co thi cai extention es7
let calculator = () => {
    // biến lưu giá km
    let kmDau,
        km1To19,
        over19,
        waitingPrice = 0;
    // lay ra loai xe , so km so phut cho
    let type = dom("#grabType").value
    let km = dom("#txtKm").value
    let wait = dom("#txtWait").value

    console.log("✅ type", type);
    console.log("✅ km", km);
    console.log("✅ wait", wait);

    switch (type) {
    case "1": // Grab Car
        kmDau = 8000;
        km1To19 = 7500;
        over19 = 7000;
        waitingPrice = 2000;
        break;

    case "2": // Grab SUV
        kmDau = 9000;
        km1To19 = 8500;
        over19 = 8000;
        waitingPrice = 3000;
        break;

    case "3": //Grab Black
        kmDau = 10000;
        km1To19 = 9500;
        over19 = 9000;
        waitingPrice = 3500;
        break;
    }
    // tien chờ
    let waitingUnit = calculatorWaiting(Number(wait))
    let fee = calculatorFee(km, kmDau, km1To19, over19)

    tongTien = waitingUnit * waitingPrice + fee

    console.log("✅ tongTien", tongTien);
    dom("#result").innerText = tongTien.toLocaleString() + " VNĐ"
    // gọi ham tinh fee và dv chờ
    // cộng lại ra đáp án
    // dom lên result

};


// ham tinh tien cho => tra ra so donvi tinh tien
// 1 dv = 30
// sophut = 3 => 3/3 => 1 dv chờ
// sophut = 4 => 4/3 => 1.121 => 2 dv chờ
// sophut = 6 => 6/3 => 2 dv chờ
// sophut = 7 => 7/3 => 2.1112 => 3 dv chờ
//
let calculatorWaiting = (wait) => {
    if(wait <= 3){
        return 1
    }
    let count = Math.ceil(wait / 3);

    // phuong phap lam tron
    // Math: round VD: 4.1 => 4; 4.6=> 5
    //       floor VD: 4.1 => 4; 4.9 => 4
    //       ceil VD: 4.1=> 5; 4.9=> 5

    console.log("👉 count", count);
    return count;
}

// tinh tien xe sokm ,kmdau, km1to19, over19
let calculatorFee = (km, kmDau, km1To19, over19) => {
    let total=0;
    //km =2
    if(km <=1){
        total = kmDau;
    }
    else if(km <=19){
        // 0->1
        // 1->19
        total = 1 * kmDau +
                (km - 1) * km1To19
    }
    else if(km > 19){
        // 0->1 kmdau
        // 1->19 (km -1) * km1to19
        // 19 trở lên (km -19) * over19
        total = 1* kmDau +
                (18) * km1To19 +
                (km - 19) * over19
    }
    else{
        console.warn("lỗi")
    }
    return total;
};

let dom = (selector) => document.querySelector(selector);