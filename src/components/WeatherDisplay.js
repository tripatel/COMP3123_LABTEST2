import React from 'react';

const WeatherDisplay = ({ weather }) => {
    if (!weather) return <p>Search for a city to get weather data.</p>;

    // Extracting weather details from the response
    const icon = weather.weather[0].icon;
    const description = weather.weather[0].description;
    const temperatureKelvin = weather.main.temp;  // Temperature in Kelvin
    const cityName = weather.name;
    const feelsLikeKelvin = weather.main.feels_like;  // Feels like in Kelvin
    const humidity = weather.main.humidity;
    const windSpeed = weather.wind.speed;

    // Function to convert Kelvin to Celsius
    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2); // Convert and round to 2 decimal places

    // Convert temperature from Kelvin to Celsius
    const temperature = kelvinToCelsius(temperatureKelvin);
    const feelsLike = kelvinToCelsius(feelsLikeKelvin);

    // Dynamically set background image based on weather condition
    const getBackgroundImage = () => {
        const weatherCondition = weather.weather[0].main;

        // Return a background image based on the weather condition
        switch (weatherCondition) {
            case 'Clear':
                return 'url(https://www.google.ca/imgres?q=sunny&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1007768414%2Fphoto%2Fblue-sky-with-bright-sun-and-clouds.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DMGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsunny&docid=qfUvdzbbOP-JpM&tbnid=SGY-EsyeqcYSLM&vet=12ahUKEwjbhp33oYCKAxXRCTQIHR-iDpMQM3oECFIQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjbhp33oYCKAxXRCTQIHR-iDpMQM3oECFIQAA)';
            case 'Clouds':
                return 'url(https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2021/10/1024/512/partly_sunny_nyc.jpg?ve=1&tl=1)';
            case 'Rain':
                return 'url(https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=)';
            case 'Snow':
                return 'url(https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-01/240111-iowa-snow-mn-0855-71b63b.jpg)';
            case 'Drizzle':
                return 'url(https://source.unsplash.com/1600x900/?drizzle)';
            case 'Thunderstorm':
                return 'url(https://www.reconnectwithnature.org/getmedia/a2de823c-a1ae-491e-a47b-f373af403d4e/Thunderstorm-lightning-strike-shutterstock_1.jpg?width=1500&height=1000&ext=.jpg)';
            default:
                return 'url(https://www.nwll.ca/wp-content/uploads/sites/2053/2023/04/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.png)';
        }
    };

    return (
        <div
            className="weather-container"
            style={{
                backgroundImage: getBackgroundImage(),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                minHeight: '400px',
                backgroundAttachment: 'fixed',  // Keeps the background static
            }}
        >
            <div className="weather-info">
                <h2>{`Weather in ${cityName}`}</h2>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                />
                <div className="temp">{temperature}°C</div>
                <p>{description}</p>

                <div className="details">
                    <div>
                        <p><strong>Feels Like:</strong> {feelsLike}°C</p>
                        <p><strong>Humidity:</strong> {humidity}%</p>
                    </div>
                    <div>
                        <p><strong>Wind Speed:</strong> {windSpeed} m/s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
