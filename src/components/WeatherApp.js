"use client";

import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import WeatherCard from "./WeatherCard";
import { getWeather } from "@/services/weatherService";

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bgClass, setBgClass] = useState("bg-default");

    const handleSearch = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeather(city);
            setWeather(data);
            updateBackground(data.main);
        } catch (err) {
            setError(err.message || "Ciudad no encontrada. Intenta de nuevo.");
            setWeather(null);
            setBgClass("bg-error");
        } finally {
            setLoading(false);
        }
    };

    const updateBackground = (condition) => {
        const bgMap = {
            clear: "bg-sunny",
            clouds: "bg-cloudy",
            rain: "bg-rainy",
            drizzle: "bg-rainy",
            thunderstorm: "bg-stormy",
            snow: "bg-snowy",
            mist: "bg-foggy",
            fog: "bg-foggy",
        };
        setBgClass(bgMap[condition] || "bg-default");
    };

    return (
        <main className={`app-container ${bgClass}`}>
            <div className="glass-panel">
                <header className="app-header">
                    <h1>Prueba Frontend</h1>
                    <p>Tu ventana al tiempo, con estilo.</p>
                </header>

                <SearchForm onSearch={handleSearch} loading={loading} />

                {error && <div className="error-message" role="alert">{error}</div>}

                {weather && <WeatherCard weather={weather} />}

                {!weather && !error && !loading && (
                    <div className="empty-state">
                        <p>Ingresa una ciudad para comenzar</p>
                    </div>
                )}
            </div>
        </main>
    );
}
