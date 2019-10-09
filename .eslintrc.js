module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true,
      "jsx": true
    }
  },
  "plugins": [
    "import",
    "react"
  ],
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "requireForBlockBody": false,
    "arrow-body-style": [2, "as-needed"],
    "no-restricted-globals": ["off", "history"],
    "react/prefer-stateless-function": "off",
    "react/no-danger": "off",
    "jsx-a11y/label-has-for": "off"
  },
  "env": {
    "browser": true
  }
};
