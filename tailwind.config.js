module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        $primary: "#caa95c",
        $white: "#fff",
        $gray: "#ced2de",
        $color: "#373737",
        $68:'#686868',
        $86:'#868686',
        $37:'#373737'
      },
      pointerEvents: ["hover", "focus"],
    },
  },
  plugins: [],
};
