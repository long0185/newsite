module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '1080px',
    },
    extend: {
      colors: {
        $primary: "#caa95c",
        $white: "#fff",
        $gray: "#ced2de",
        $color: "#373737",
        $68:'#686868',
        $86:'#868686',
        $37:'#373737',
        $ec:'#ececec',
        $f4:'#f4f4f4',
        $af:'#afafaf',
        $fa:'#fafafa'
      },
      pointerEvents: ["hover", "focus"],
    },
  },
  plugins: [],
};
