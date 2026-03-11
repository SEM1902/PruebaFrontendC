import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Prueba Frontend | Clima",
  description: "Consulta el clima con estilo y precisión.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.variable}>
        {children}
      </body>
    </html>
  );
}
