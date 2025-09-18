console.log("this is for data types and objects");
//nn bb  ss u
let a = null; //null
let b = 3454; //number
let c = true; //boolean, can also be false
let d = BigInt("63466") + BigInt("4"); //bigint (big integer)
let e = "Mahtab"; //string, anything inside of "" is called string
let f = Symbol;
("i am a nice symbol"); //Symbol
let g = undefined; //or let g; //undefined
console.log(a, b, c, d, e, f, g);
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

//Non primitive Data Type - Objects in Js
const item = {
  mahtab: true,
  lol: false,
  bruh: 67,
  sus: undefined,
};
console.log(item["mahtab"]);
