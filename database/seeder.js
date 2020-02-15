const mongoose = require('mongoose');
const Product = require('./');
const faker = require('faker');
const fs = require('fs');

let sizes = ["XS", "S", "M", "L", "XL"];
var writeItems = fs.WriteStream('items.csv');
writeItems.write('productId,name,brand,item,color,rating,price,size,images,description\n', 'utf8');

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
      const images = [faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image()];
      const description = [faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName()];
      const data = `${id},${name},${brand.join('')},${item},${color},${rating},${price},${size},${images.join('|')},${description.join('|')}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
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

// async function seed() {
//   var id = 0
//   for (let k = 0; k < 1000; k++) {
//     var bucket = [];
//     for (let i = 0; i < 10000; i++) {
//       let item = new Product({
//         productId: id,
//         name: faker.commerce.productName(),
//         brand: faker.company.companyName(),
//         item: faker.random.number(),
//         color: faker.commerce.color(),
//         rating: Math.round(Math.random() * 5),
//         price: faker.commerce.price(),
//         size: sizes[Math.floor(Math.random() * 5)],
//         images: [faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image(), faker.random.image()],
//         description: [faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName(), faker.commerce.productName()]
//       });
//       bucket.push(item);
//       id++;
//     }
//     await Product
//     .insertMany(bucket, {lean: true})
//     .then(success => {
//       if (id % 10000 === 0) {
//         console.log("succesfully made it to id: ", id)
//       }
//     })
//     .catch(err => {
//       console.error(err)
//     });
//   }
// }
// seed();