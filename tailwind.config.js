/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: '#054C73',
                secondary: '#DFE9F4',
                ternary: '#F2F5FF',
                circle: '#09513B',
                default: '#333333',
                subtitle: '#666666',
            },
        },
    },
    plugins: [],
}
