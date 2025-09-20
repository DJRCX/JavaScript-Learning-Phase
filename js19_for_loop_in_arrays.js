let num = [3, 4, 5, 46, 43, 54];
for (let i = 0; i < num.length; i++) {
  console.log(num[i] * num[i]);
}

//same, but using forEach loop
num.forEach((element) => {
  console.log(element * element);
});

//Array.from; converts an array like object to an array, mainly used when working with dom
let str = "mahtab";
let arr = Array.from(str);
console.log(arr, typeof arr, typeof str);

//for..of loop; for reprensing values
for (let item of num) {
  console.log(item);
}

//for..in loop; for representing keys
for (let i in num) {
  console.log(i);
}
