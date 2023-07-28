# Projeto Gerador de PlaceHolder

Projeto tem objetivo de realizar um teste de consumo de API utilizando ReactJS

## Teste

Crie uma página que consuma a api "<https://placehold.co/>" e possua os controles html necessários para cada uma das sessões, para manipular a criação de uma "imagem de placeholder".

Ex: imite a intenção do site "<https://cssgradient.io/>" que cria controles para gerar e manipular o css gradient.

### Será necessário

> A utilização de docker para levantar o servidor do Create React App e executá-lo na avaliação.
>
> Utilizar o Create React App como base para a aplicação.
>
> Qualquer biblioteca que auxilie na implementação.
>
> Utilizar o MUI para estilização da página e criação dos controles.

### Não será permitido

> A utilização de qualquer framework backend ou framework frontend, como nest, nextjs, etc.

## Criação do ambiente de desenvolvimento

Passo a passo da criação do ambiente de desenvolvimento ReactJS utilizando o docker

Iniciar o projeto através do comando:

`npx create-react-app gerador-placeholder`.

Instalar o MUI para a estilização:

`npm install @mui/material @emotion/react @emotion/styled`.

Criar container custom do Nodejs do Docker, para isso é necessário criar o arquivo Dockerfile e realizar a customização.

Dockerfile

    #Usar a imagem do Nodejs
    FROM node
    #Definicição do diretório de trabalho
    WORKDIR /app
    #Copiar os arquivos package.json
    COPY package.json .
    #Instalar as dependências
    RUN npm install
    #Copiar os arquivos restantes
    COPY . .
    #Apontar o App para a porta 3000
    EXPOSE 3000
    #Executar o servidor
    CMD ["npm", "start"]

A estrutura do Dockerfile serve para otimizar o build.

Criar o arquivo .dockerignore para ignorar alguns arquivos:

.dockerignore

    node_modules
    Dockerfile
    .git
    .gitignore
    .dockerignore
    .env

Executar o servidor docker através do:

 `docker build -t react-image .`.

Para o Windows é necessário criar um arquivo .env com varáveis de ambiente.
A várivel de ambiente principal é a `WATCHPACK_POLLING=true` para ativar o auto update.

.env

    WATCHPACK_POLLING=true
    REACT_APP_NAME=spardev

criar imagem com:

 `docker run --env-file ./.env -v %cd%\src:/app/src -d -p 3000:3000 --name react-app react-image`.

Ao criar a imagem ela será apontada para o localhost:3000.

Parar a imagem:

`docker rm react-app -f`.
