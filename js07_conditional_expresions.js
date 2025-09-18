//Node.js does not have prompt(), switch() built-in.
//prompt() is a browser API (it shows a pop-up dialog box in Chrome, Firefox, etc.).
//Node.js runs JavaScript outside the browser (on your computer’s terminal),
//so it doesn’t include browser-specific functions like alert(), confirm(), or prompt().
//but the codes works perfectly in any browser console (f12)

let a = prompt("Hey whats your age?");
console.log(typeof a); //string

a = Number.parseInt(a); //Converting String to a Number
console.log(typeof a); //number

//if/else/esle..if
if (a < 0) {
  alert("this is an invalid age");
} //if true, it'll run, otherwise this condition will not run
else if (a < 9) {
  alert("youre a kid, not eligible of driving");
} else if (a >= 9 && a < 18) {
  alert("youre a kid and you can think of driving after the age of 18");
} else {
  alert("you can drive");
}

//ternary operator
console.log("you can", a < 18 ? "not drive" : "drive");

// switch
const expr = "pepe"; //eikhane je fol er naam dibo, oitar output ashbe
switch (expr) {
  case "komola":
    console.log("komolar daam 400tk per kg");
    break; //eita dile nicher gula ar run hobe na, only tader naam thakle e run hobe.
  case "aam":
  case "pepe":
    console.log("aam ar pepe er daam 200tk per kg");
    break;
  default:
    console.log("onno jaygay jan, amar kache naiga");
}
