console.clear();

let my_str = "I'm a web dev";
console.log(my_str);

console.log(my_str.length); //prints the length of the str
console.log(my_str[0]); //prints index 0


console.log(my_str.search("dev")); //prints the position of the word
console.log(my_str.toLocaleLowerCase()); //converts to lower case
console.log(my_str.toLocaleUpperCase()); //converts to upper case


let new_str = my_str.replace("web dev", "student");
console.log(new_str);

let concated_str = my_str + "," +new_str;
console.log(concated_str);

let another_str = "     I'm a student    ";
console.log(another_str.trim());