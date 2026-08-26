let num1 = "",
  num2 = "",
  result = "",
  operator = "";

//  chooseOperator : lấy ra toán tử số học
let chooseOperator = (oper) => { 
    // khi nhập xong thằng num1 thì đến oparator
    if(num1 != ""){
        operator = oper
        display()
    }
 }

// inputNumber : giá trị số theo từng phím
//lấy số
let inputNumber = (so) => {
  if (operator != "") {
    // có giá trị là + - * /
    num2 += so;
  } else {
    num1 += so;
  }
  // nhap xong thi log ra de xem bieu thuc
  display()
};

let display = () => { 
    console.log(`${num1} ${operator} ${num2}`);
    let exp = `${num1} ${operator} ${num2}`
    dom("#expression").innerText = exp
 }

// calculateResult : tính toán
// anfn
let calculateResult = () => { 
    // num1 +/-/*// num2
    let a = Number(num1)
    let b = Number(num2)
    let res = 0;

    switch (operator){
        case "+":{
            res = a + b
            break;
        }
        case "-":{
            res = a - b
            break;
        }
        case "*":{
            res = a * b
            break;
        }
        case "/":{
            res = a / b
            break;
        }
    }
    dom("#display").innerText = res
    //reset để tí nữa tính tiếp
    num1=""
    num2=""
    operator=""
    
 }

 // clear()

// dom
let dom = (selector) => document.querySelector(selector);
let dom_v2 = (selector) =>{
    return document.querySelector(selector);
} 