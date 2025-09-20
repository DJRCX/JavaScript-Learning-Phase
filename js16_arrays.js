let marks_class_12 = [45, 56, 67, 78, null, false, "bruh"];
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]); //undefined, as its not present
console.log("the length of the array is", marks_class_12.length);
marks_class_12[7] = 88; //adding a new element
marks_class_12[0] = 99; //changing an element
console.log(marks_class_12);
console.log(typeof marks_class_12);

for (let i = 0; i < marks_class_12.length; i++) {
  console.log(marks_class_12[i]);
}
