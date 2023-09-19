# Escolher a imagem que queremos rodar
# Para mais informações acessar https://hub.docker.com/ 
FROM node:18-alpine

# Define onde as informações estão contidas
WORKDIR /usr/src

# Faz a cópia dos arquivo de depências do projeto para nosso WORKDIR
COPY package.json ./

# Rodando as imagens, apesar de usar yarn o pacote padrão das imagens rodam com NPM do node
RUN npm install

# Copiando todos os arquivos
COPY . .

# Script para rodar o projeto - npm run dev - 
CMD [ "npm", "run", "dev" ]