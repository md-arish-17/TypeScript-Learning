let num:number = 10
let str:string = "arish"
let empty:null = null
let undefine:undefined = undefined
let numArray:number[] = [10,20,30]
let nameArray:string[] = ["usman","zaheen","baji"]
let nameArray2:Array<string> = ["anas","arish","mammi","papa"]
let comArray:[string,number] = ["arish",21]
let obj:{userName:string,age:number} = {userName: "zaheen dolly",age:2}
let data:any = 10
console.log(data)
data = "usman boss"
console.log(data);

let input:unknown = "Hello Baji Boss"
if(typeof input === "string"){
    console.log(input.toUpperCase())
}

function logMessage():void{
    console.log("This function does'nt return nothing")
}
logMessage()

function funcError():never{
    throw new Error("Usman Toys Error")
}
// funcError()

let myData:number|string = 23
console.log(typeof myData)

type employee = {fName : string}
type manager = {department : string}
type TeamLead = employee & manager
let company:TeamLead = {fName:"usman lala", department:"King of the World"}
console.log(company);

type id = string | number
let userId:id = "1234"
console.log(userId);

enum Role{
    Admin,
    User,
    Guest
}
let userRole:Role = Role.Admin

let direction:"up"|"down"
direction = "up"
// direction = "left"

function add(x:number,y:number){
    console.log(x + y)
}
add(10,99)

console.log(num)
console.log(str)
console.log(empty)
console.log(undefine);
console.log(numArray)
console.log(nameArray);
console.log(nameArray2);
console.log(comArray);
console.log(obj);

