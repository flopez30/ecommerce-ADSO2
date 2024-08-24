import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";


import {lightTheme} from '../themes'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* Restablece los estilos base del navegador */}
      <CssBaseline/>
       {/* Renderiza el componente principal de la página */}
<Component {...pageProps} />
   </ThemeProvider>
  )

}

// Estilos globales:
// Se importa el archivo de estilos globales (../styles/globals.css).
// ThemeProvider y CssBaseline:
// Se utiliza el componente ThemeProvider de Material-UI para aplicar el tema de diseño (lightTheme en este caso).
// El componente CssBaseline restablece los estilos base del navegador para una apariencia consistente en todos los elementos.
// Renderización del componente principal:
// Se renderiza el componente principal de la página (generalmente el componente asociado a la ruta actual).