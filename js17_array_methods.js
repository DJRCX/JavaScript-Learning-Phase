//Array Methods
let num = [1, 2, 3, 4, 5, 6, 7];
let b = num.toString();
console.log(b, typeof b);
let c = num.join(" & ");
console.log(c, typeof c);
let d = num.pop(); //removes the last element and returns it
console.log(num, d);
let e = num.push(8); //adds an element at the end and returns the new length of the array
console.log(num, e);
let f = num.shift(); //removes the first element and returns it
console.log(num, f);
let g = num.unshift(0); //adds an element at the beginning and returns the new length of the array
console.log(num, g);
