let arr = [45, 56, 67];
//Array map method
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value - index;
});
console.log(a, arr);

//array filter method
let b = arr.filter((value, index, array) => {
  console.log(value, index, array);
  return value > 50;
});
console.log(b, arr);

//array reduce method
let c = arr.reduce((acc, value, index, array) => {
  console.log(acc, value, index, array);
  return acc + value;
}, 0);
console.log(c, arr);