//Importar file que permitira acessar o mongo
const ProductModel = require('../models/product');
//Arrow Function para gerar JSON com dados do DB mongo seguindo padrão documentação JSON
const transformer = product => ({
        type: 'products',
        attributes: {
            name: product.name,
            price: product.price,
        },
        links: {
            self: `/api/${product.id}`
        }    
})

//Handler getAll
const getAll = async (request, h) => {    
    const products = await ProductModel.find({});
    return { data: products.map(transformer)};
}

//handler find
const find = async (req) => {
   const product = await ProductModel.findById(req.params.id);// metodo para get por id
   return {data: transformer(product)};
}

//Handler save
const save = (req, h) => { // req - requisição do pedido; h - toolkit para facilitar enviar uma resposta http
    const {name, price} = req.payload; // Uma Atribuição via desestruturação para name e price
    
    const product = new ProductModel; // instanciar um product 
    product.name = name; // atribuir para o produto a variavel name
    product.price = price; // atribuir para o produto a variavel price

    product.save(); // Salvar os dados no Mongo (Operação assincrona)
    return h.response(transformer(product)).code(201); // Um return para aparecer no terminar para dar de entender que salvou no mongo
}

//Handler delete
const remove = async (req, h) => {
    await ProductModel.findOneAndDelete({ _id: req.params.id}); // Ação de deletar da db
    return h.response().code(204);
}

//Exportar os Handlers do arquivo
module.exports = {
    getAll,
    save,
    remove,
    find
}