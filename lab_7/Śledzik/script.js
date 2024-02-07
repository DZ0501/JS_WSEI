document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'e55598585c034b4054a7157ec1298f46';
    const cityInput = document.getElementById('cityName');
    const addCityBtn = document.getElementById('addCityBtn');
    const weatherInfo = document.getElementById('weatherInfo');

    let cities = [];

    window.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('cities')) {
            cities = JSON.parse(localStorage.getItem('cities'));
            renderCities();
        }
    });

    addCityBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city !== '') {
            addCity(city);
            cityInput.value = '';
        }
    });

    function addCity(city) {
        if (cities.length >= 10) {
            alert('You can add up to ten cities.');
            return;
        }

        if (!cities.includes(city)) {
            cities.push(city);
            localStorage.setItem('cities', JSON.stringify(cities));
            fetchWeather(city);
        } else {
            alert('City already added.');
        }
    }

    function removeCity(city) {
        cities = cities.filter(item => item !== city);
        localStorage.setItem('cities', JSON.stringify(cities));
    }

    function renderCities() {
        weatherInfo.innerHTML = '';
        cities.forEach(city => {
            fetchWeather(city);
        });
    }

    function fetchWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                const weatherDiv = document.createElement('div');
                weatherDiv.classList.add('city');
                weatherDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${(data.main.temp - 273.15).toFixed(1)} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
                <button class="removeBtn">Remove</button>
            `;
                weatherInfo.appendChild(weatherDiv);

                const removeBtn = weatherDiv.querySelector('.removeBtn');
                removeBtn.addEventListener('click', () => {
                    removeCity(city);
                    weatherDiv.remove();
                });
            })
            .catch(error => {
                alert(error.message);
            });
    }

});
