//importando arquivo mongo.js
require('./services/mongo');
//Importando o modulo Hapi
const Hapi = require('@hapi/hapi'); 
//Importar rotas do arquivo indicado
const routes = require('./routes');

//Arrow function para inicialização do servidor
const init = async () => {
    const server = Hapi.Server({
        port: 3000, // Porta do servidor
        host: 'localhost' // Endereço do servidor
    });

    server.route(routes);// Puxas as rotas definidas pela variavel routes
    await server.start(); //await para esperar o modulo do node iniciar
    console.log('Server running on %s', server.info.uri); //Quando iniciar o servidor o console apresentara a msg
}

//Arrow function caso de erro de acesso no servidor
process.on('unhandledRejection', (err) => {
    console.log(err); // Mensagem de rro no console
    process.exit(1); // Fecha o processo
})

init(); // Inicia o servidor
