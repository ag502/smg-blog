module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
};
