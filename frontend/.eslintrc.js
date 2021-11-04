module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    rules: {
        'react/prop-types': 'off',
        'react/no-danger': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-alert': 'off',
    },
};
