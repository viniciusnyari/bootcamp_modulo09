// Essas configurações irão overrides em algumas configurações do babel,
// como por exemplo utilizar não mais o ../.../
// Esse arquivo é carregado automaticamente pela extensão 'react-app-rewired'

// Tem que ser assim por que aqui é node - não se preocpar com os erros
// Manter como dependência de DEV
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
