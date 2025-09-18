function oneplusavg(x, y) {
  return 1 + (x + y) / 2;
  console.log("Done");
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a & b is", oneplusavg(a, b));
console.log("One plus Average of b & c is", oneplusavg(b, c));
console.log("One plus Average of c & a is", oneplusavg(c, a));

//another way of defining function
const sum = (p, q) => {
  return p + q;
};
console.log(sum(9, 7));

const hello = () => {
  console.log("bruh");
  return "lol";
};
let k = hello();
console.log(k);
