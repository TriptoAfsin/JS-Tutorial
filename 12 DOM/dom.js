const myDiv = document.querySelector('div');
const myHeading = document.getElementById('heading1');
const myPara = document.getElementById('para1');
const myBtn = document.getElementById('my_btn');
const myInpt = document.getElementById('myInpt');
const secondary_holder = document.getElementById('secondary-holder');

//myDiv.innerHTML = '<h1>My new heading';

myHeading.innerText = "This is my new heading";
myPara.innerText = "New para from JS";

let i = 0;

myBtn.addEventListener('click', incrementor);

function incrementor(){
    myDiv.style.backgroundColor = 'green';
    i++;
    myHeading.innerText = i;
}

myInpt.addEventListener('keyup', () => {
    let myStr = myInpt.value;
    myHeading.innerText = myStr;
});

//1
secondary_holder.innerHTML = `<p>This is the new paragrapgh</p>
This is the value of pi: ${Math.PI}<br>
<h2> This is a secondary heading</h2>
`;

//2
let myNewHeading = document.createElement('h1');
myNewHeading.textContent = "This is the latest heading";

secondary_holder.appendChild(myNewHeading);



