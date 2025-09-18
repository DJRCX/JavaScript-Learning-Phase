// 88;
// ("mahtab");
// false;
console.log("Operators in Js");
//Arithmetic Operators
let a = 45;
let b = 4;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a ** b =", a ** b); //** = ^
console.log("a % b =", a % b);
console.log("a++ =", a++); //first prints the number, after that it will increment if needed
console.log("a=", a);
console.log("++a =", ++a); // will increment first, then prints the number
console.log("a =", a);
console.log("a-- =", a--); //first prints the number, after that it will decrement if needed
console.log("a =", a);
console.log("--a =", --a); // will decrement first, then prints the number
console.log("a =", a);

// Assignment Operators
let c = 5;
c = 5;
console.log("c is now =", c);

c += 5; //Same as c = c + 5
console.log("c is now =", c);

c -= 5; //Same as c = c - 5
console.log("c is now =", c);

c *= 5; //Same as c = c * 5
console.log("c is now =", c);

c /= 5; //Same as c = c / 5
console.log("c is now =", c);

c %= 5; //Same as c = c % 5
console.log("c is now =", c);

c **= 5; //Same as c = c **/^ 5
console.log("c is now =", c);

//Comparison Operatior
let comp1 = 6;
let comp2 = "6";
//if value is same, doesn't differentiates between types
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1 != comp2 is", comp1 != comp2);
//differentiates between types, even if the value is same
console.log("comp1 === comp2 is", comp1 === comp2);
console.log("comp1 !== comp2 is", comp1 !== comp2);
//greater or less
let comp3 = 40;
let comp4 = 30;
console.log("comp3 < comp4 is", comp3 < comp4);
console.log("comp3 > comp4 is", comp3 > comp4);
console.log("comp3 <= comp4 is", comp3 <= comp4);
console.log("comp3 >= comp4 is", comp3 >= comp4);

//logical operators
let x = 5;
let y = 6;
//and
console.log(x < y && x == 5);
//or
console.log(x > y || x == 5);
//not
console.log(!false);
console.log(!true);
