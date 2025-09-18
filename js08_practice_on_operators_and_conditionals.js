// practice sets
// problem 1
let a = prompt("enter your age");
console.log(typeof a);
a = Number.parseInt(a);
console.log(typeof a);
if (a >= 10 && a <= 20) {
  alert("age lies between 10 and 20");
} else {
  alert("age is invalid");
}

// problem 2
let Name = prompt("ki kinben?");
switch (Name) {
  case "alu":
    alert("alur daam 35tk kg");
    break;
  case "potol":
    alert("potol er daam 60tk kg");
    break;
  case "piyaj":
    alert("piyaj er daam 80tk kg");
    break;
  default:
    alert("dokan bondho");
}

// problem 3
let num = prompt("enter your number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  alert("divisible by  2 & 3");
  //problem 4
} else if (num % 2 == 0 || num % 3 == 0) {
  alert("divisible by  2 or 3");
} else {
  alert("not divisible by 2 & 3");
}

//problem 5
let car = prompt("enter your model");
car = Number.parseInt(car);
let c = car > 5 ? "we have your car" : "we dont have your car";
alert(c);
//or
let boat = prompt("enter your model");
boat = Number.parseInt(boat);
alert("we " + (boat > 5 ? "have your boat" : "dont have your boat"));
