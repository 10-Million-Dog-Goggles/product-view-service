var mongoose = require('mongoose');

var productSchema = mongoose.Schema ({
  productId: {type: Number},
  name: {type: String},
  brand: {type: String},
  item: {type: Number},
  color: {type: String},
  rating: {type: Number},
  price: {type: Number},
  size: {type: String},
  images: {type: String},
  description: {type:String}
});

module.exports = productSchema

