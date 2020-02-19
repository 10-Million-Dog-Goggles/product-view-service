const mongoose = require('mongoose');
const Product = require('./');
const faker = require('faker');
const fs = require('fs');

let sizes = ["XS", "S", "M", "L", "XL"];
var writeItems = fs.WriteStream('products.csv');
writeItems.write('id,name,brand,item,color,rating,price,size\n', 'utf8');

var writeTenMillionItems = (writer, encoding, callback) => {
  console.log('Started: ', Date.now());
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.commerce.productName();
      const brand = faker.company.companyName().split(',');
      const item = faker.random.number(999);
      const color = faker.commerce.color();
      const rating = Math.round(Math.random() * 5);
      const price = faker.random.number(999);
      const size = sizes[Math.floor(Math.random() * 5)];
      const data = `${id},${name},${brand.join('')},${item},${color},${rating},${price},${size}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
      if(id % 500000 === 0) {
        console.log('At id ',id, 'Time: ', Date.now());
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionItems(writeItems, 'utf-8', () => {
  writeItems.end();
  console.log('Ended: ', Date.now());
});