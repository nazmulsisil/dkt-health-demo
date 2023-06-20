const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                bgPrimary: "#9cdedd",
                textPrimary: "#024550",
                textPrimaryLight: "#01817f",
            },
            fontFamily: {
                roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("daisyui")],
};
