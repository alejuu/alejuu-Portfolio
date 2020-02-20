// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans-serif'],
      'serif': ['Ovo', 'serif']
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};
