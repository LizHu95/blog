module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommanded'],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    }
};
