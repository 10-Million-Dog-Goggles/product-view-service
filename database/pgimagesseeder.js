const mongoose = require('mongoose');
const Product = require('./');
const faker = require('faker');
const fs = require('fs');

var writeItems = fs.WriteStream('images.csv');
writeItems.write('id,image_url,description,product_id\n', 'utf8');

var writeTenMillionItems = (writer, encoding, callback) => {
  console.log('Started: ', Date.now());
  let i = 10000000;
  let pid = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      for (var k = 0; k < 6; k++) {
        const image_url = faker.random.image();
        const description = faker.commerce.productName();
        const data = `${image_url},${description},${pid}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
      pid += 1;
      if(pid % 500000 === 0) {
        console.log('At id ',pid, 'Time: ', Date.now());
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