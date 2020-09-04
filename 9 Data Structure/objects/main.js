console.clear();

let myObj = {
    name: "Tripto",
    occupation: "Student",
    age: 22
};

let newObj = {
    name: "Sakib",
    occupation: "Cricketer",
    age: 30
};

//Object mutations
let referObj = newObj;
referObj.name = "Rakib";
referObj.occupation = "Banker";
referObj.age = 26;

console.log(referObj);
console.log(myObj.occupation);

console.log(Object.entries(myObj)); //prints the obj entries
console.log(Object.keys(myObj)); //prints the keys of obj
console.log(Object.values(myObj));


//another way 
let betterObj = new Object();

betterObj.name = "Shumon";
betterObj.age = 25;

console.log(betterObj);

