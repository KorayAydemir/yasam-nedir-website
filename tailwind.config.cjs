/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/app/**/*.tsx", "build/views/index.ejs"],
    theme: {
        colors: {
            transparent: 'transparent',
            green: '#6ab165',
            red: '#e7432b',
            cadet: '#486769',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        extend: {},
    },
    plugins: [],
}

