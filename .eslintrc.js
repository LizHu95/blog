module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        semi: [0, 'always'],
        indent: ['error', 4],
        'react/no-unescaped-entities': [0],
        quotes: ['error', 'single'],
        eqeqeq: [2, 'allow-null']
    }
};
