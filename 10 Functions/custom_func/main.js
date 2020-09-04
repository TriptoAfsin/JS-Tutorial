//old approach 
function myFunc(){
    return console.log("Hello from function");
}

myFunc();

function chkOdd(num){
    if(num % 2 == 0){
        return console.log(num+" is even");
    }
    else{
        return console.log(num+" is odd");
    }
}
chkOdd(8);

let myFuncVar = function(number){
    return console.log(Math.pow(number, 2));
}

myFuncVar(5);

//New Approach 
myNewFunc = (value) => {
    return console.log(Math.sin(value));
}
myNewFunc(5);

myCirArea = (radius) => {
    //pi*radius*radius
    return console.log(Math.PI*Math.pow(radius, 2));
}

myCirArea(10);



