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