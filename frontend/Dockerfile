# Define a imagem base que será usada
FROM node:16-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta 5173 do contêiner
EXPOSE 5173

# Define o comando de inicialização do aplicativo
CMD [ "npm", "start" ]