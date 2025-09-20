//Question 1
let str = 'har"';
console.log(str.length); //four

//Question 2
//includes()
const sentence = "the quick brown fox jumps over the lazy dog";
const word = "fox";
console.log(sentence.includes(word)); //true
console.log(
  `the word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

//startsWith()
const Str = "Starting a new string";
console.log(Str.startsWith("new")); //false
console.log(Str.startsWith("Starting")); //true

//endsWith()
console.log(Str.endsWith("new")); //false
console.log(Str.endsWith("string")); //true

//Question 3
let bruh = "THE WORLD IS ENDING";
console.log(bruh.toLocaleLowerCase());

//Question 4
let money = "Please give me TK 1000";
let amount = Number.parseInt(money.slice(17));
console.log(amount);
console.log(typeof amount);

//Question 5
let friend= "rafid";
friend[3] = "F"; //strings are immutable, so it'll not work
friend = friend.slice(0, 2) + "F" + friend.slice(3); // we can do this
console.log(friend.replace("f", "F")); //or this
console.log(friend);