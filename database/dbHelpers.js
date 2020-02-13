var Product = require('./');

var helpers = {
  get: () => Product.find({}),
  getOne: (productId) => Product.find({productId}),
  create: (item) => Product.create(item),
  update: (productId, item) => Product.findOneAndUpdate({productId}, item, {new: true}),
  delete: (productId) => Product.deleteOne({productId})
}

module.exports = helpers