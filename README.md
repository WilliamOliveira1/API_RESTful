# API_RESTful

## Projeto web com API RESTful

**Foi usado dois módulos de rotas:** 

> O HapiJs para a API(comunicação back-end)
> E o express para o site(comunicação front-end)

**Instalação do HapiJs**
> npm install --save @hapi/hapi 

** Instalação do nodemon ** 
> npm install -g nodemon -> instalar globalmente
> npm install --save-dev nodemon -> para instalar no diretório atual indicando que é para ambiente de desenvolvimento

*a função do nodemon é de não precisar toda vez dar reset no servidor para visualizar mudançar realizadas no código*

**Após instalar o nodemon, no package.json dentro de scripts criar a linha:**
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./src/index"
  },
```

*Esse script irá rodar o arquivo index.js com npm start*

***Para ambiente de testes antes de criar o front-end foi usado postman para request.***

**Para instalação do Docker em ambiente windows e linux (processador arquitetura x86):**
> Baixar o programa de instalação no site -> https://www.docker.com/get-started

**Para instalação do docker em SO de processadores arquitetura arm(raspberry):**
***No console digitar:***
> curl -sSL https://get.docker.com | sh

**Para instalar o mongo - imagem oficial do docker para processadores X86:**
> docker run -p 27017:27017 --rm --name api-db -d mongo

> docker run --> para o docker rodar algo
> -p 27018:27017 --> indica a porta que vai rodar (27017 porta padrão do mongo e 27018 a porta da maquina)
> 
> --rm -->força a remoção para o docker não dar erro dizendo que a imagem ja existe
> 
> --name api-db --> o nome da imagem
> 
> mongo --> a imagem do MongoDb 

**Para processadores arquitetura Arm(raspberry):**
> sudo docker run -p 27018:27017 --rm --name api-db1 -d mangoraft/mongodb-arm

> mangoraft/mongodb-arm --> imagem do MongoDb para raspberry

