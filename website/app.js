/* Global Variables */
let zipCity = null;
let view = document.getElementById("main-view");
let loader = document.getElementById("loader");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/**
 * @description it gets the Weather data and dynamically updates the ui
 * @returns void
 */
const getData = () => {
    const btn = document.getElementById("getData");

    /* add event when clicking submit button */
    btn.addEventListener('click', () => {
        zipCity = document.getElementById("zip-city").value;
        if(!zipCity){
            alert("please fill the input");
            return;
        }

        loader.style.opacity = '1';

        //use the api to get the weather
        fetch(`/weather/${zipCity}`).then(res => res.json()).
        then(({city, temp, condition, country, ...rest}) => {
            loader.style.opacity = '0';
            if(rest.code === 400){
                alert(rest.error);    
                return;
            }
            view.innerHTML += `
                <div class="card">
                <h3 class="city">${city} <sup>${country}</sup></h3>
                <h1 class="temp">${temp}<sup>°C</sup></h1>
                <img src="https:${condition.icon}" alt="temp" draggable="false">
                <p class="condition">${condition.text}</p>
                </div>
            `;
        })

        document.getElementById("zip-city").value = "";         
    });
};

getData();