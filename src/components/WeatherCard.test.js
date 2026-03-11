import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

describe("WeatherCard Component", () => {
    const mockWeather = {
        name: "Madrid",
        temp: 25,
        humidity: 40,
        description: "cielo claro",
        main: "clear",
        icon: "01d",
    };

    test("debe renderizar el icono de sol para clima 'clear'", () => {
        const { container } = render(<WeatherCard weather={mockWeather} />);
        expect(container.querySelector(".lucide-sun")).toBeInTheDocument();
    });

    test("debe renderizar el icono de nube para clima 'clouds'", () => {
        const { container } = render(<WeatherCard weather={{ ...mockWeather, main: "clouds" }} />);
        expect(container.querySelector(".lucide-cloud")).toBeInTheDocument();
    });

    test("debe renderizar el icono de lluvia para clima 'rain'", () => {
        const { container } = render(<WeatherCard weather={{ ...mockWeather, main: "rain" }} />);
        expect(container.querySelector(".lucide-cloud-rain")).toBeInTheDocument();
    });

    test("debe renderizar el icono de nieve para clima 'snow'", () => {
        const { container } = render(<WeatherCard weather={{ ...mockWeather, main: "snow" }} />);
        expect(container.querySelector(".lucide-cloud-snow")).toBeInTheDocument();
    });

    test("debe renderizar el icono de bruma para clima 'mist'", () => {
        const { container } = render(<WeatherCard weather={{ ...mockWeather, main: "mist" }} />);
        expect(container.querySelector(".lucide-cloud-fog")).toBeInTheDocument();
    });

    test("debe renderizar el icono por defecto para climas desconocidos", () => {
        const { container } = render(<WeatherCard weather={{ ...mockWeather, main: "unknown" }} />);
        expect(container.querySelector(".lucide-cloud-sun")).toBeInTheDocument();
    });
});
