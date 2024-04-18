/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
/*
    function({ addUtilities }) {
      const newScrollbar = {
        
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(0,0,0) white" // Also added the track color for better visibility
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "15px"
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(255,255,255)"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(0,0,0)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
        
        ".invisible-scrollbar::-webkit-scrollbar":{
          display: none
        }
      }
      addUtilities(newScrollbar, ["responsive", "hover"])
    }
    */
  ]
}