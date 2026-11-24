const fullname : string = "Nga" // biết fullname có KDL là string

let age:number = 10.5 // biết age có KDL là number

//  boolean 
let isStudent: boolean = true


// age = "mười"
isStudent = false

let ds:string[] = [] ; // array 
ds.push("Nga");


type Product = {
    id: number
    name: string
    description?: string // ? có thể có hoặc không có trường này
    price?: number
}
const prod : Product = {
    id:1,
    name:"sp A"
}

let dsProduct: Product[]=[
    prod,
    {id:2,name:"sp 2", description:"mo ta"}
]

// funtion
// hàm không có giá trị trả về return 
function demo (obj:Product) : void{
    
}
// hàm  có giá trị trả về return 
function demoReturn (obj:Product) : number{
    
    return 0;
}
//  let a = demoReturn()