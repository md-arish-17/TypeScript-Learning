var num = 10;
var str = "arish";
var empty = null;
var undefine = undefined;
var numArray = [10, 20, 30];
var nameArray = ["usman", "zaheen", "baji"];
var nameArray2 = ["anas", "arish", "mammi", "papa"];
var comArray = ["arish", 21];
var obj = { userName: "zaheen dolly", age: 2 };
var data = 10;
console.log(data);
data = "usman boss";
console.log(data);
var input = "Hello Baji Boss";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
function logMessage() {
    console.log("This function does'nt return nothing");
}
logMessage();
function funcError() {
    throw new Error("Usman Toys Error");
}
// funcError()
console.log(num);
console.log(str);
console.log(empty);
console.log(undefine);
console.log(numArray);
console.log(nameArray);
console.log(nameArray2);
console.log(comArray);
console.log(obj);
