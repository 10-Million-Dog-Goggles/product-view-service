const mongoose = require('mongoose');
const Product = require('./');
const faker = require('faker');
const fs = require('fs');

var writeItems = fs.WriteStream('images.csv');
writeItems.write('image_url,description,product_id\n', 'utf8');

var writeTenMillionItems = (writer, encoding, callback) => {
  console.log('Started: ', Date.now());
  let i = 10000000;
  let id = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      for (var k = 0; k < 6; k++) {
        const image_url = faker.random.image();
        const description = faker.commerce.productName();
        const data = `${image_url},${description},${id}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
      id += 1;
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
});