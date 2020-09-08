//Importar o handler do diretpirio indicado abaixo
const producHandler = require('./handlers/products');

module.exports = [
    {
        method: 'GET', // Metodo para buscar informações no banco de dados
        path: '/api', // Endereço da rota
        handler: producHandler.getAll // Puxa o handler da variavel productHandler getAll do arquivo
    },
    {
        method: 'GET', // Metodo para buscar informações no banco de dados
        path: '/api/{id}', // Endereço da rota com id do produto
        handler: producHandler.find // Puxa o handler da variavel productHandler getAll do arquivo
    },
    {
        method: 'POST', // Metodo para salvar no banco de dados
        path: '/api', // Endereço da rota
        handler: producHandler.save // Puxa o handler da variavel productHandler save do arquivo
    },
    {
        method: 'DELETE', // Metodo para deletar no banco de dados
        path: '/api/{id}', // Endereço da rota com id do produto a ser deletado
        handler: producHandler.remove, // Puxa o handler da variavel productHandler remove do arquivo
        options: {
            cors: true
        }
    }
]