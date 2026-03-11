# Prueba Frontend 🌤️

Prueba Frontend es una aplicación de clima premium construida con **Next.js**, diseñada para ofrecer una experiencia visual impactante, dinámica e interactiva mientras consultas el tiempo en cualquier ciudad del mundo.



## ✨ Características

- **Diseño Ultra-Premium**: Interfaz basada en *Glassmorphism* con efectos de desenfoque profundo y sombras suaves.
- **Experiencia Dinámica**:
  - Fondos animados que cambian según las condiciones climáticas (Soleado, Lluvioso, Tormenta, etc.).
  - Micro-animaciones en iconos y transiciones de estado.
- **Búsqueda Avanzada**: Obtén temperatura, humedad y descripción detallada de cualquier ciudad.
- **Arquitectura Profesional**: Separación clara de componentes, servicios y estilos.
- **Calidad Garantizada**: Cobertura de pruebas unitarias superior al **90%** con Jest y React Testing Library.

## 🚀 Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) (App Router & Turbopack)
- [React](https://reactjs.org/) 19
- [OpenWeatherMap API](https://openweathermap.org/)
- [Lucide React](https://lucide.dev/) (Iconografía)
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/) (Testing)
- Vanilla CSS (Glassmorphism & Custom Animations)

## 🛠️ Configuración y Ejecución

### Requisitos Previos

- Node.js 18.x o superior
- Una API Key de [OpenWeatherMap](https://openweathermap.org/api)

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/skycast.git
   cd skycast
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz y añade tu clave:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=tu_clave_aqui
   ```
   > [!IMPORTANTE]
   > He incluido mi propia API Key en el archivo `.env.local` para facilitar la revisión, por lo que debería funcionar de inmediato. Si por alguna razón no funciona o hay algún problema, por favor no duden en escribirme.

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🧪 Pruebas y Calidad

Para ejecutar la suite de pruebas y ver el reporte de cobertura:

```bash
npm run test:coverage
```

## 📂 Estructura del Proyecto

- `src/app`: Configuración de rutas y layout global.
- `src/components`: Componentes de UI reutilizables y lógica de vista.
- `src/services`: Lógica de negocio e integración con APIs externas.
- `src/__tests__`: Pruebas de integración y componentes.


