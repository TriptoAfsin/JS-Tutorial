//regex = regular expression
let myPara = document.getElementById('myPara').innerText;
const newPara = document.getElementById('newPara');

let myStr = "My name is Tripto, I live in Bangladesh, my lucky number is 21, the value of pi: 3.14";

let searchResult = myStr.search(/[tripto|bangladesh]/i);

let myNewStr = myPara.replace(/Bangladesh/i, "USA");

newPara.innerHTML = myNewStr;







console.log(searchResult);
console.log(myNewStr);