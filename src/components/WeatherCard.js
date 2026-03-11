"use client";

import {
    Cloud,
    CloudDrizzle,
    CloudFog,
    CloudLightning,
    CloudRain,
    CloudSnow,
    CloudSun,
    Droplets,
    Sun,
    Thermometer
} from "lucide-react";

const WeatherIcon = ({ condition, size = 64 }) => {
    const iconProps = { size, className: "weather-icon" };

    switch (condition) {
        case 'clear':
            return <Sun {...iconProps} />;
        case 'clouds':
            return <Cloud {...iconProps} />;
        case 'rain':
            return <CloudRain {...iconProps} />;
        case 'drizzle':
            return <CloudDrizzle {...iconProps} />;
        case 'thunderstorm':
            return <CloudLightning {...iconProps} />;
        case 'snow':
            return <CloudSnow {...iconProps} />;
        case 'mist':
        case 'smoke':
        case 'haze':
        case 'dust':
        case 'fog':
        case 'sand':
        case 'ash':
        case 'squall':
        case 'tornado':
            return <CloudFog {...iconProps} />;
        default:
            return <CloudSun {...iconProps} />;
    }
};

export default function WeatherCard({ weather }) {
    if (!weather) return null;

    return (
        <div className="weather-card">
            <div className="weather-header">
                <h2>{weather.name}</h2>
                <div className="weather-main">
                    <WeatherIcon condition={weather.main} />
                    <div className="temp-container">
                        <span className="temperature">{weather.temp}°C</span>
                        <p className="description">{weather.description}</p>
                    </div>
                </div>
            </div>

            <div className="weather-details">
                <div className="detail-item">
                    <Thermometer size={20} />
                    <span>Sensación Térmica</span>
                    <strong>{weather.temp}°C</strong>
                </div>
                <div className="detail-item">
                    <Droplets size={20} />
                    <span>Humedad</span>
                    <strong>{weather.humidity}%</strong>
                </div>
            </div>
        </div>
    );
}
