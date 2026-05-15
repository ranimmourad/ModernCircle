import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        linen: '#F3EFE8',      
        marble: '#EAE6E1',     
        // Text
        wood: '#4A3728',       
        bark: '#6B5744',       
        // Accents
        terracotta: '#C27C5B', 
        botanical: '#8FA78F',  
        sage: '#C5D1C5',       
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-lora)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;