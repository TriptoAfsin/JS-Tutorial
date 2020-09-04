//API Link: https://corona.lmao.ninja/v2/all

const dataHolder = document.getElementById("data-holder");


async function pullData(){
    let response = await fetch("https://corona.lmao.ninja/v2/all")
        .then(res => res.json());
    console.log(response);

    dataHolder.innerHTML = `<h2>Total Affected:  ${response.cases}</h2>`;
    dataHolder.innerHTML += `<h2>Total Active:  ${response.active}</h2>`;
    dataHolder.innerHTML += `<h2>Total Recovered:  ${response.recovered}</h2>`;
    dataHolder.innerHTML += `<h2>Total Deaths:  ${response.deaths}</h2><br>`;
    dataHolder.innerHTML += `<h1>Last 24Hr Updates</h1>`;
    dataHolder.innerHTML += `<h2>Today Cases:  ${response.todayCases}</h2>`;
    dataHolder.innerHTML += `<h2>Today Recovered:  ${response.todayRecovered}</h2>`;
    dataHolder.innerHTML += `<h2>Today Deaths:  ${response.todayDeaths}</h2>`;

}

pullData();