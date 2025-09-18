//while loops
let n = prompt("enter the value of n");
n = Number.parseInt(n);
let i = 0;
while (i < n) {
  alert(i);
  i++;
}

//do-while loops. will run the loop for once, even if the condition does'nt match
let m = prompt("enter the value of m");
m = Number.parseInt(m);
let j = 0;
do {
  alert(j);
  j++;
} while (j < m);
