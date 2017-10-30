const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    animals: {type: String, required: true},
    price: {type: Number, required: true},
   
});



module.exports =  mongoose.model('Product', productSchema);