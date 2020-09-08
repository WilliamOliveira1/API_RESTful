// importar o modulo mongoose
const mongoose = require('mongoose');
// metodo do mongoose schema --Pesquisar documentação do mongoose
const Schema = mongoose.Schema;

// Schema do produto
const ProductSchema = new Schema({
    name: String,
    price: Number
});

// Instanciamento de model do mongoose e exportando ele
module.exports = mongoose.model('Product', ProductSchema);
