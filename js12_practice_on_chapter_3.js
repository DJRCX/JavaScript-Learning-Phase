let marks = {
  ab: 45,
  bc: 56,
  ca: 90,
};

//problem 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " is " +
      marks[Object.keys(marks)[i]]
  );
}

//problem 2
for (let key in marks) {
  console.log("The marks of " + key + " is " + marks[key]);
}

//problem 3
let cn = 45;
let i;
while (i != cn) {
  alert("try again");
  i = prompt("enter correct number");
}
alert("done");

//problem 4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(4, 5, 6, 7));
