let myJSON = [
    {
        "name": "Tripto",
        "age": 22
    },
    {
        "name": "Shumon",
        "age": 20
    },
    {
        "name": "Shumon",
        "age": 20
    }
];


//converts the json to string
let myStr = JSON.stringify(myJSON);
console.log(myStr);

//converts the string to json
let myNewJSON = JSON.parse(myStr);
console.log(myNewJSON);

//another way 
/*
let myDB = fetch("./db.json")
                .then(res => res.json())
                .then(json => console.log(json));
                */

console.log(myJSON[1].age);