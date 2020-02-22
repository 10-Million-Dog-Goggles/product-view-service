var mongoose = require('mongoose');
var productSchema = require('./schema.js');
var mongoURI = 'mongodb://localhost/REIproducts';
mongoose.Promise = global.Promise;


var db = mongoose.connect(mongoURI, { useNewUrlParser: true })
.then(() => console.log('connected to mongoDB'))


var Product = mongoose.model('Product', productSchema)


module.exports = Product;
