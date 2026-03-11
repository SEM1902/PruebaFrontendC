import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import WeatherApp from "@/components/WeatherApp";
import { getWeather } from "@/services/weatherService";

// Mock the weather service
jest.mock("@/services/weatherService");

describe("WeatherApp Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe mostrar el campo de entrada y el botón de búsqueda", () => {
        render(<WeatherApp />);
        expect(screen.getByPlaceholderText(/Busca una ciudad/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument();
    });

    test("debe mostrar la información del clima después de una búsqueda exitosa", async () => {
        const mockWeather = {
            name: "Madrid",
            temp: 25,
            humidity: 40,
            description: "cielo claro",
            main: "clear",
            icon: "01d",
        };
        getWeather.mockResolvedValueOnce(mockWeather);

        render(<WeatherApp />);
        const input = screen.getByPlaceholderText(/Busca una ciudad/i);
        const button = screen.getByRole("button", { name: /buscar/i });

        fireEvent.change(input, { target: { value: "Madrid" } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText("Madrid")).toBeInTheDocument();
            expect(screen.getAllByText("25°C")[0]).toBeInTheDocument();
            expect(screen.getAllByText("40%")[0]).toBeInTheDocument();
            expect(screen.getByText("cielo claro")).toBeInTheDocument();
        });
    });

    test("debe actualizar el fondo según el clima", async () => {
        const mockRainy = {
            name: "London",
            temp: 15,
            humidity: 80,
            description: "lluvia",
            main: "rain",
            icon: "10d",
        };
        getWeather.mockResolvedValueOnce(mockRainy);

        render(<WeatherApp />);
        const input = screen.getByPlaceholderText(/Busca una ciudad/i);
        const button = screen.getByRole("button", { name: /buscar/i });

        fireEvent.change(input, { target: { value: "London" } });
        fireEvent.click(button);

        await waitFor(() => {
            const container = screen.getByRole("main");
            expect(container).toHaveClass("bg-rainy");
        });
    });

    test("debe manejar correctamente un error cuando la ciudad es inválida", async () => {
        getWeather.mockRejectedValueOnce(new Error("Ciudad no encontrada"));

        render(<WeatherApp />);
        const input = screen.getByPlaceholderText(/Busca una ciudad/i);
        const button = screen.getByRole("button", { name: /buscar/i });

        fireEvent.change(input, { target: { value: "CiudadInexistente" } });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText(/Ciudad no encontrada/i)).toBeInTheDocument();
            expect(screen.queryByText("25°C")).not.toBeInTheDocument();
        });
    });

    test("el botón debe estar deshabilitado cuando el campo está vacío", () => {
        render(<WeatherApp />);
        const button = screen.getByRole("button", { name: /buscar/i });
        expect(button).toBeDisabled();
    });
});
