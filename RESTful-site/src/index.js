//Importando express
const express = require ('express');
const app = express();

//Templete engine 
app.set('view engine', 'ejs');
app.set('views', './src/views');

//Midway para static files (CSS...)
app.use(express.static('public'))// Indicando que os assets estarão na pasta public

//Importar request para comunicar com o back-end(HAPI, Mongo e Docker)
const request = require('request-promise-native');


//Endereço para a web 
app.get('/produtos', async function(req, res) {
    const result = await request.get('http://localhost:3000/api'); // Requisição GET para o back-end no endereço indicado
    const products = JSON.parse(result).data; // Armazenar o JSON do DB na variavel products
    res.render('products', {products: products}); // Renderizar a pagina products.ejs da pasta views
})

//Executar o express na porta 3001 pois a api ja esta na porta 3000
app.listen(3001, function() {
    console.log('Site-api working');
});