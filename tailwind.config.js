/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans']
      },
      spacing: {
        '100': '110rem',
        '99': '53rem',
        '90': '55rem',
        '89': '21rem',
        '91': '28rem',
        '92': '49.8rem',
        '94': '36.2rem',
        '95': '10rem',
      }
    },
  },
  plugins: [],
}

