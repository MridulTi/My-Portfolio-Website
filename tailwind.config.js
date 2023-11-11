/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#E4CAA9",
        "secondary-dark":"#DF836C",
        "tertiary":"#402E32",
        "secondary":"#FF8960",
        "sec-sec-grad":"linear-gradient(to right, #FF8960, #E4CAA9)"
      },
      backgroundColor:{
        "primary":"#E4CAA9",
        "bg-prime":"#D8D7D5",
        "neutral-gray":"#EFEFEF",
        "background-dark":"#363333",
        "sec-sec-grad":"linear-gradient(to right,#FF8960, #E4CAA9)"
      },
      backgroundImage:{
        "sec-sec-grad":"linear-gradient(to right,#FF8960, #E4CAA9)"
        
      }
    },
  },
  plugins: [],
}

