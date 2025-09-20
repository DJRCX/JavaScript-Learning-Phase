let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete num[4]; // delete 5
console.log(num); // [ 1, 2, 3, 4, <1 empty item>, 6, 7, 8, 9 ]
console.log(num.length); //9

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let num3 = [210, 211, 212, 213, 214, 215, 216, 217, 218, 219];
let newArray = num1.concat(num2, num3);
console.log(num1, num2, num3);
console.log(newArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]

let num4 = [2, 25, 3, 46, 0, 3, 27, 4, 73, 4, 223, 6, 433, 555];
let compare = (a, b) => {
  return a - b;
};
console.log(num4.sort(compare)); // [ 0, 2, 3, 3, 4, 4, 6, 25, 27, 46, 73, 223, 433, 555 ]
console.log(num4.reverse()); // [ 555, 433, 223, 73, 46, 27, 25, 6, 4, 4, 3, 3, 2, 0 ]

//splice & slice
let num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num5.splice(3, 5, 34543, 34545, 4525, 45435, 2452); // (start, deleteCount, item1, item2, itemN)
// from index 3, delete 5 items and add 5 new items
console.log(num5);

let num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNum6 = num6.slice(3, 7); // (start, end) end not included
console.log(num6);
console.log(newNum6); // [ 4, 5, 6, 7 ]
