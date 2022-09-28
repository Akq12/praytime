// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'Reem Kufi Fun',
        'Reem': ' Reem Kufi Ink'
      }
    },
    // screens: {
    //   // 'tablet': '640px',
    //   // // => @media (min-width: 640px) { ... }

    //   // 'laptop': '1024px',
    //   // // => @media (min-width: 1024px) { ... }

    //   // 'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
}
