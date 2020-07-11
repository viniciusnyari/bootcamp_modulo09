## bootcamp_modulo09 - `GoBarber Web`

Treinamento RocketSeat - GoBarber Web

## Criando a aplicação do zero
yarn create react-app bootcamp_modulo09

## Excluir os comentários e o arquivo 
manifest.json

## Excluir esses e zelar para evitar os erros -  remover as referências
App.css
App.test.js
index.css
logo.svg
serviceWorker.js

## Gerando o arquivo '.editorConfig'
Botão direito nos arquivos em uma área livre e escolher 'Generator .editorConfig'
Será gerado o arquivo

## Adicionar o EsLint como dependência de desenvolvimento
yarn add eslint@^6.6.0 -D

## Inicializando o 'eslint'
yarn eslint --init <br/>
Responda as perguntas conforme abaixo: <br/>
? How would you like to use ESLint? To check syntax, find problems, and enforce code style<br/>
? What type of modules does your project use? JavaScript modules (import/export)<br/>
? Which framework does your project use? React<br/>
? Does your project use TypeScript? No<br/>
? Where does your code run? Browser<br/>
? How would you like to define a style for your project? Use a popular style guide<br/>
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript<br/>
Checking peerDependencies of eslint-config-airbnb@latest<br/>
Responsa 'Y' para tudo o que for questionado e aguarde a instalação.<br/>

## Instalando pretier - deixa o código mais bonito - eslint procura erros (ausência de pontos)
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

## Criar arquivo '.prettierrc'
{<br/>
  "singleQuote": true,<br/>
  "trainlingComma":"es5"<br/>
}<br/>

## Configurações do '.eslintrc.js'
extends: [<br/>
    'plugin:react/recommended',<br/>
    'airbnb',<br/>
    'prettier',<br/>
    'prettier/react',<br/>
  ],<br/>
parser: 'babel-eslint',<br/>
plugins: [<br/>
    'react',<br/>
    'prettier',<br/>
  ],<br/>
  rules: {<br/>
    'prettier/prettier':'error',<br/>
    'react/jsx-filename-extension' :[<br/>
      'warn',<br/>
      { extensions: ['.jsx','.js']}<br/>
    ],<br/>
    'import/prefer-default-export': 'off'<br/>
  },  <br/>

## Instalando o `react-router-dom` para as nossas rotas
yarn add react-router-dom

## Instalando o `history` para armazenar os valores de histórico
yarn add history

## Erros do eslint - `[eslint] Delete 'cr' [prettier/prettier]`
"prettier/prettier": ["error", { <br>     
    "endOfLine":"auto" <br>          
  }], <br>
inside the rules object of the eslintrc file.

## Instalando o `reactotron`
yarn add reactotron-react-js

yarn start


## Algumas informações

### Rodando a aplicação - essa configuração está no 'package.json'
yarn react-scripts start

### Endereço
https://app.rocketseat.com.br/node/gobarber-web
C:\Temp\Bootcamp2019\bootcamp_modulo09

### Deixar rodando o backend lá do `módulo02` - ver `Informações locais`