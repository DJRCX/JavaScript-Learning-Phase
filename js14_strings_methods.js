let naam = 'mahta"b';
console.log(naam.length);
console.log(naam.toUpperCase());
console.log(naam.toLowerCase());
console.log(naam.slice(2, 4));
console.log(naam.slice(2));
console.log(naam.replace("mah", "Mah"));

let friend = "eashan";
console.log(naam.concat(" is a friend of ", friend, ",Ok?"));
let friend2 = "            rafid               ";
console.log(friend2);
console.log(friend2.trim());

//Quick  quiz: use a for loop to print a string
let school = "daffodil";
for (i = 0; i < school.length; i++) {
  console.log(school[i]);
}
