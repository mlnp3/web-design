// Data types
let studentNumber = 3; // number
let name = "Mohamed"; // string
let hide = false; // boolean
let grades = [80, 95, 76]; //Array
let courses = { //Object
  name: "INFOSYS3847",
  professor: "Joe Smith",
  year: 2019
};

incrementByOne(x);
console.log("Outside of mehtod::::: " + x)
decrementByone(x);
console.log("AFTER DECREMENT CALLED:::: " + x)

x += 5
console.log("VALUE OF x:::: " + x)

x = doubleTheValue(x)

console.log("VALUE OF X after doubling it:::: " + x)

function incrementByOne(a) {
  console.log(a++);
}

function decrementByone(a) {
  console.log(a--);
}

function doubleTheValue(x){
    return x * 2
}
