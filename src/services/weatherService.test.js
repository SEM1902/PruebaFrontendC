import { getWeather } from "./weatherService";

global.fetch = jest.fn();

describe("weatherService", () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    test("debe lanzar un error si no se proporciona una ciudad", async () => {
        await expect(getWeather("")).rejects.toThrow("City name is required");
    });

    test("debe normalizar los datos correctamente en una respuesta exitosa", async () => {
        const mockResponse = {
            ok: true,
            json: () =>
                Promise.resolve({
                    name: "Madrid",
                    main: { temp: 25.4, humidity: 40 },
                    weather: [{ description: "cielo claro", main: "Clear", icon: "01d" }],
                }),
        };
        fetch.mockResolvedValueOnce(mockResponse);

        const data = await getWeather("Madrid");

        expect(data).toEqual({
            name: "Madrid",
            temp: 25,
            humidity: 40,
            description: "cielo claro",
            main: "clear",
            icon: "01d",
        });
    });

    test("debe lanzar un error si la respuesta de la API no es exitosa", async () => {
        const mockResponse = {
            ok: false,
            json: () => Promise.resolve({ message: "city not found" }),
        };
        fetch.mockResolvedValueOnce(mockResponse);

        await expect(getWeather("CiudadInvalida")).rejects.toThrow("city not found");
    });

    test("debe usar un mensaje de error por defecto si la API no proporciona uno", async () => {
        const mockResponse = {
            ok: false,
            json: () => Promise.resolve({}),
        };
        fetch.mockResolvedValueOnce(mockResponse);

        await expect(getWeather("Error")).rejects.toThrow("Error fetching weather data");
    });
});
