module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
  plugins: [],
  animation:{
    gradientAnimation:{
    "duration": "1s",
    "iterations": "infinite",
    "direction": "alternate",
    "timingFunction": "ease-in-out",
    }
  },
  keyFrames:{
    gradient:{
      "0%": {
        backgroundPosition: "0% 50%"
      },
      "50%":{
        backgroundPosition:" 100% 50%"
      },
      "100%": {
        backgroundPosition: "0% 50%"
      }
  }
},
}
}