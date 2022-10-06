# G-Studies

O intuito deste projeto é fazer uma aplicação frontend utilizando 
React, as metodologia BEM e Dont Repeat Yourself. 

## Criando sua Aplicação
npx create-react-app --template typescript nome-projeto --use-npm

onde:

npx create-react-app: informa o NPX como executor de pacotes deste projeto;
--template typescript: informa o template padrão do Typescript para este projeto;
--use-npm: informa o NPM como gerenciador de pacotes deste projeto;
g-studies: Informa o nome do projeto.

Neste projeto, foi utilizado a bibliotecas SASS e css-modules.

Caso for utilizar arquivos estáticos, aplique o comando:
    npm run build
Sempre configurar o baseurl do arquivo ts.config.json

## REACT

A biblioteca foi criado pelo facebook, com intuito de adicionar 
dinamismo nas páginas, pois varios elementos deveriam ser alterados
ao mesmo tempo, tornando assim o frontend reativo.


## SASS
Para instalar a dependencia, deve-se executar o comando:
    npm install -D sass
O sass é uma biblioteca que permite criar e utilizar arquivos scss em
sua aplicação REACT, aém de pertimir utilizar código javascript em meio
a seus arquivos CSS.


## CSS-MODULES e SASS

Para instalar a dependencia, deve-se executar o comando:
    npm install -D typescript-plugin-css-modules
O css-modules esta sendo utilizado, para os arquivos.css serem 
considerados módulos javascrpit ao serem passados para componentes
React.

Para atribuir um className em uma tag, é necessário importar o 
arquivo Nome.module.scss para o arquivo .tsx, e ao adicionar em si
o className, idealmente, utilizando a metodologia BEM é utilizado:
className={style["nomePai__nomeFilho--modificador"]}

## REACT-ROUTER-DOM

Para instalar o react router dom:
    npm install react-router-dom



## ESLINT

O eslint é uma ferramenta para análise e padronização de código, onde 
a mesma pode forçar o programador adotar algumas prática pré definidas
de boas práticas de programação, deixando assim o código mais legível.
Um código que apenas voce entende não serve para muita coisa :)

Para instalar os eslint:
    npm init @eslint/config
Para executar o eslint:
    $ npx. eslint ./src --fix
Adicionar no .eslintrc.json:
("react/react-in-jsx-scope": "off",)

## CLASSNAMES
Para instalar a dependencia, reve-se executar o comando:
    npm install classsnames
O classnames esta sendo utilizado, para melhorar a legibilidade da 
declaração de classes, normalmente utilizamos:
    className={`${styles['filtros__filtro']} ${filtro === opcao.id ? styles['filtros__filtro--ativo'] : ""}`} 

## FontWasome

Esta é uma biblioteca que transforma os ícones em componentes react.
Tambem da para importar estes ícones no html, via classname mas vou utilizar
 a biblioteca deles pra react.
    # Free icons styles
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/react-fontawesome@latest



# React-Transtion-Group

    npm i --save-dev @types/react-transition-group


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
