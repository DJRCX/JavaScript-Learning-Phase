//for loop
//Program to add first naturual numbers
let sum = 0;
let n = prompt("enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  console.log(i + 1, "+");
}
alert("Sum of First " + n + " natural numbers is " + sum);

//for in loop
let mrk = {
  ab: 80,
  bc: 90,
  cd: 34,
  de: 45,
};
for (let a in mrk) {
  alert("Marks of " + a + " are " + mrk[a]);
}

//for of loop
for (let b of "Mahtab") {
  alert(b);
}
