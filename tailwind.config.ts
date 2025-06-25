// tailwind.config.js
export default {

    theme: {
        extend: {
            colors: {
                cream: '#FEFAE0',
                lightblue: '#A8DADC',
                lightorange: '#F8B195',
                lightgreen: '#C1E1C1',
                dark: '#2B2B2B',
            },
        },
    },
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
};
