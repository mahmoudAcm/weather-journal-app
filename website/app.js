/* Global Variables */
let zipCity = null;

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

        //use the api to get the weather
        fetch(`/weather/${zipCity}`).then(res => res.json()).
        then(data => {
            console.log(data);
        })
    });
};

getData();