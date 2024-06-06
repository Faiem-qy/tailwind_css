/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ['./index.html', './src/**/*.js'], // Adjust according to your file structure
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      }
    },
  },
  plugins: [],
};