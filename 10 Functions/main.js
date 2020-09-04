//Math function

let pi = Math.PI;
console.log(pi);

//math power 
console.log(Math.pow(5, 3));


//math random
let myRandomVar = Math.random();
console.log(Math.floor(myRandomVar*20));


//math sin 
console.log(Math.sin(0.5));


//Max min 
let myMax = Math.max(5, 7, 9.6, 12, 2 ,13); //13
let myMin = Math.min(5, 7, 9.6, 12, 2 ,13); //13

console.log(myMax);
console.log(myMin);

//Date function

let myDate = new Date();
let mymonth = myDate.getMonth() + 1;
console.log(myDate.getHours()+':'+myDate.getMinutes()+' '
    +myDate.getDate()+'/'+mymonth+'/'+myDate.getFullYear());



