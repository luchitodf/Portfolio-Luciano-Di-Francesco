module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Esto incluye todos los archivos en la carpeta src
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1a202c", // Asegúrate de definir colores personalizados si los usas
        primary: "#3182ce",
      },
    },
  },
  plugins: [],
};
