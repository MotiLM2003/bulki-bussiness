const tailwindcss = require('tailwindcss');

module.exports = {
  Plus: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
