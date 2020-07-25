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
inside the rules object of the eslintrc file.<br>

Prop spreading is forbiddeneslint <br>
"react/jsx-props-no-spreading": "off",

## Instalando o `reactotron`
yarn add reactotron-react-js

## Instalando o `proptypes`
yarn add prop-types

## Instalando `tyled-components` para trabalhar com estilos
yarn add styled-components


### instalando fonte `roboto`
https://fonts.google.com/specimen/Roboto?sidebar.open&selection.family=Roboto:ital,wght@0,700;1,400#standard-styles <br>
<style> <br>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap'); <br>
</style> <br>

### Melhorando as importações (evitando o uso de `../.../`) - Pré <br>
Esse aqui permite dar override em algumas configurações iniciais (ver config-overrides.js) <br>
yarn add customize-cra react-app-rewired@ -D

### Melhorando as importações (evitando o uso de `../.../`) - Pós <br>
Instalando plugin para fazer import mais 'suaves', no formato conhecido '~/' <br>
yarn add babel-plugin-root-import@6.2.0 -D <br>

### Trocar configurações de `package.json` <br>
Onde temos `react-scripts` muda-se para `react-app-rewired` <br>

### Instalando essa extensão para resolver problemas de importação<br>
yarn add eslint-import-resolver-babel-plugin-root-import -D <br>
Foi adicionado o seguinte script em `eslint.js` abaixo de rules <br>
settings: { <br>
    "import/resolver":{ <br>
      "babel-plugin-root-import" :{ <br>
        rootPathSuffix:"src", <br>
      }, 
    } 
  } 
 
### Instalando `polished` para trabalhar com cores -  deixa uma cor um pouco mais escura<br>
yarn add polished

### Instalando `rocketseat/unform` que auxilia a construção de formulários<br>
yarn add @rocketseat/unform

### Instalando `yup` para validação de dados<br>
Validação de dados tanto em front como back e utiliza o padrão de Schema validation <br>
yarn add yup

### Instalando `redux` para store<br>
yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer

### Instalando `axios` para fazer as chamadas a API<br>
yarn add axios

<br>
## Algumas informações

### Rodando a aplicação - essa configuração está no 'package.json'
yarn start

### Aqui tem o projeto original do `GoBarber`
https://github.com/Rocketseat/bootcamp-gostack-09/


### Endereço
https://app.rocketseat.com.br/node/gobarber-web
C:\Temp\Bootcamp2019\bootcamp_modulo09

### Deixar rodando o backend lá do `módulo02` - ver `Informações locais` <br>
C:\Temp\Bootcamp2019\bootcamp_modulo02 <br>

Deixar os serviços do docker rodando - subir docker desktop<br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker ps -a <br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker start database <br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker start mongobarber <br>
PS C:\Temp\Bootcamp2019\bootcamp_modulo02> docker start redisbarber <br>

Deixar rodando o servidor backend <br>
Em um outro terminal, acessar essa pasta `C:\Temp\Bootcamp2019\bootcamp_modulo02` e rodar `yarn sucrase-node src/server.js`

<br>

"email": "provider@gmail.com" e  "provider@gmail.com" tem a mesma senha: "123456789"

<br>
Token provider = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTk1NzExMzg0LCJleHAiOjE1OTYzMTYxODR9.cXyz6nMUHPEjDTf3oCxTnKLFO-5fUcxByw3n2xXtdqA"

<br>
Token user = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTk1NzExNTIyLCJleHAiOjE1OTYzMTYzMjJ9.LNVe2t8fqBQN0hKqa9mo_Gp5ttGS53qY4BoouvLVD44"
<br>
### package.json
{ <br>
  "name": "modulo09", <br>
  "version": "0.1.0", <br>
  "private": true, <br>
  "dependencies": { <br>
    "@rocketseat/unform": "^1.5.1", <br>
    "axios": "^0.19.0", <br>
    "date-fns": "^2.0.0-beta.2", <br>
    "date-fns-tz": "^1.0.7", <br>
    "history": "^4.9.0", <br>
    "immer": "^3.1.3", <br> 
    "polished": "^3.4.1", <br>
    "prop-types": "^15.7.2", <br>
    "react": "^16.8.6", <br>
    "react-dom": "^16.8.6", <br>
    "react-icons": "^3.7.0", <br>
    "react-perfect-scrollbar": "^1.5.3", <br>
    "react-redux": "^7.1.0", <br>
    "react-router-dom": "^5.0.1", <br>
    "react-scripts": "3.0.1", <br>
    "react-toastify": "^5.3.1", <br>
    "reactotron-react-js": "^3.3.2", <br>
    "reactotron-redux": "^3.1.1", <br>
    "reactotron-redux-saga": "^4.2.2", <br>
    "redux": "^4.0.4", <br>
    "redux-persist": "^5.10.0", <br>
    "redux-saga": "^1.0.5", <br>
    "styled-components": "^4.3.2", <br>
    "yup": "^0.27.0" <br>
  }, <br>
  "scripts": { <br>
    "start": "react-app-rewired start", <br>
    "build": "react-app-rewired build", <br>
    "test": "react-app-rewired test", <br>
    "eject": "react-scripts eject" <br>
  }, <br>
  "eslintConfig": { <br>
    "extends": "react-app" <br>
  }, <br>
  "browserslist": { <br>
    "production": [ <br>
      ">0.2%", <br>
      "not dead", <br>
      "not op_mini all" <br>
    ], <br>
    "development": [ <br>
      "last 1 chrome version", <br>
      "last 1 firefox version", <br>
      "last 1 safari version" <br>
    ] <br>
  }, <br>
  "devDependencies": { <br>
    "babel-eslint": "10.0.1", <br>
    "babel-plugin-root-import": "^6.2.0", <br>
    "customize-cra": "^0.2.14", <br>
    "eslint": "^5.16.0", <br>
    "eslint-config-airbnb": "^17.1.1", <br>
    "eslint-config-prettier": "^6.0.0", <br>
    "eslint-import-resolver-babel-plugin-root-import": "^1.1.1", <br>
    "eslint-plugin-import": "^2.18.0", <br>
    "eslint-plugin-jsx-a11y": "^6.2.3", <br>
    "eslint-plugin-prettier": "^3.1.0", <br>
    "eslint-plugin-react": "^7.14.2", <br>
    "eslint-plugin-react-hooks": "^1.6.1", <br>
    "prettier": "^1.18.2", <br>
    "react-app-rewired": "^2.1.3" <br>
  } <br>
}
    