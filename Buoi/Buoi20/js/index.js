// ds rỗng
let students = ["Hải", "Long", "Quân", "Hải", "Hoàng", "Hải"];

// ds có 5 phần tử null
let mentors = new Array(5).fill("MT"); // lấy đầy 5 thk đầu

mentors.push("hihi");
mentors[0] = "mt01";
console.log("✅ mentors", mentors);

console.log("✅ students", students);