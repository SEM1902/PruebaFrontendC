const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || 'PLACEHOLDER_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
    if (!city) throw new Error('City name is required');

    const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=es`
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error fetching weather data');
    }

    const data = await response.json();

    return {
        name: data.name,
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        description: data.weather[0].description,
        main: data.weather[0].main.toLowerCase(),
        icon: data.weather[0].icon,
    };
};
