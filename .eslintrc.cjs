module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12, // Permite el uso de características de ES2021
  },
  rules: {
    // 'linebreak-style': [
    //   'error',
    //   process.platform === 'win32' ? 'windows' : 'unix',
    // ],
    'linebreak-style': 'off',
    // semi: ['error', 'never'],
    semi: 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': 'warn', // Advertencia para variables no utilizadas
    'no-undef': 'error', // Advertencia para variables no definidas
    'no-console': 'warn',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'no-underscore-dangle': ['off'],
    'import/extensions': 'off',
    camelcase: 'off',
    'max-len': ['error', { code: 120 }],
  },
};
