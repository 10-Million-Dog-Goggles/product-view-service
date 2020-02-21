const mongoose = require('mongoose');
const Product = require('./');
const seedData = require('./products.json');
const faker = require('faker');

let products = [];
let sizes = ["XS", "S", "M", "L", "XL"];
let colors = ["Really Red", "Old Orange", "Yucky Yellow", "Googly Green", "Big Blue", "Pasty Purple", "Wiggly White", "Bloopy Black", "Marco Mustard"];

for (var i = 0; i < 3; i++) {
  let realProduct = {};
  realProduct.productId = i;
  realProduct.name = seedData[i].name;
  realProduct.brand = seedData[i].brand;
  realProduct.item = seedData[i].item;
  realProduct.color = seedData[i].color;
  realProduct.rating = Math.floor(Math.random() * 100);
  realProduct.price = seedData[i].price
  realProduct.size = seedData[i].size;
  realProduct.images = seedData[i].images;
  realProduct.description = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`;
  console.log(faker.random.image())
  products.push(realProduct);
}

for (var i = 3; i < 100; i++) {
  let product = {};
  product.productId = i;
  product.name = seedData[i].name;
  product.brand = seedData[i].brand;
  product.item = faker.random.number({min: 1, max:200000});
  product.color = `${colors[Math.floor(Math.random() * colors.length - 1)]}/${colors[Math.floor(Math.random() * colors.length - 1)]}`;
  product.rating = Math.floor(Math.random() * 100);
  product.price = Math.floor(Math.random() * 500) + 0.95;
  product.size = sizes[Math.floor(Math.random() * 5)];
  product.images = seedData[i].images;
  
  product.description = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()}`;

  products.push(product);
}

var insertSeedData = () => {
  Product.create(products)
  .then(() => {
    console.log('database seeded');
  })
  .catch(err => console.error(err));
};

insertSeedData()