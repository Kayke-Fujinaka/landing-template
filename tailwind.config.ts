import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      paragraph: '#ADB5BD',
      footer: '#202942',
      red: '#E43F52'
    },
    extend: {
      backgroundImage: {
        'footer-texture': "url('/images/footer-texture.svg')",
      }
    }
  },
  plugins: [],
};
export default config;
