// https://type.fit/api/quotes

const myQuote = document.getElementById('quote');

/*
fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => console.log(data[0]));
*/
let i = 0;
//asynch function
async function myAPI(){
    let response = await fetch('https://type.fit/api/quotes')
        .then(res => res.json());
    console.log(response);
    

    /*
    for(i = 0; i < response.length; i++){
        console.log(i);
        myQuote.innerHTML += `<p id="${i}">${response[i].text}  Author: ${response[i].author}</p>`;
    }
    */

    setInterval(showQuote, 2000);

    function showQuote(){
        myQuote.innerHTML = `<p id="${Math.floor(Math.random()*response.length)}">${response[Math.floor(Math.random()*response.length)].text}  Author: ${response[Math.floor(Math.random()*response.length)].author}</p>`;
        console.log(Math.floor(Math.random()*response.length));
    }
    
}

myAPI();

