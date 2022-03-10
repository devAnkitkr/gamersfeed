const Nth = require("tailwind-nth-child");
const nth7n = new Nth("7n", "7n+0");
const nth6n = new Nth("6n", "6n+0");
const nth5n = new Nth("5n", "5n+0");
const nth4n = new Nth("4n", "4n+0");

// const nth5n= new Nth("7n","7n+0");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    // extend the backgroundColor variants
    extend: {
      backgroundColor: [
        "nth-child-7n",
        "nth-child-6n",
        "nth-child-5n",
        "nth-child-4n",
      ],
      width: ["nth-child-7n", "nth-child-6n", "nth-child-5n", "nth-child-4n"],
      flexShrink: [
        "nth-child-7n",
        "nth-child-6n",
        "nth-child-5n",
        "nth-child-4n",
      ],
    },
  },
  plugins: [
    nth7n.nthChild(),
    nth6n.nthChild(),
    nth5n.nthChild(),
    nth4n.nthChild(), // add-plugin
  ],
};
