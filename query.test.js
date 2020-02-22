const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/REIproducts';

// MongoClient.connect(url, (err, database) => {
//   console.log('Connected')
// })

for (var i = 0; i < 10; i ++) {
  describe('GET one by id - postgreSQL', () => {
    const Pool = require('pg').Pool
    const pool = new Pool({
      user: 'christianbueno',
      host: 'localhost',
      database: 'reiproducts',
      password: 'Kiba11234!',
      port: 5433,
    });
    it('expect a PostgreSQL JOIN query of product & images to have an Execution Time under 50ms with a product id > 9000000', async (done) => {
      var randomIdx = Math.floor(Math.random() * (10000000-9000000) + 9000000);
      var before = new Date();
      var result = await pool.query('EXPLAIN ANALYZE SELECT * FROM images JOIN product ON images.product_id = product.id where product.id = $1 limit 6;', [randomIdx]);
      var after = new Date() - before;
      // var colonIdx = result.rows[7]['QUERY PLAN'].indexOf(':');
      // var msIdx = result.rows[7]['QUERY PLAN'].indexOf(' ms');
      // var executionTime = parseFloat(result.rows[7]['QUERY PLAN'].slice(colonIdx+2, msIdx));
      expect(after).toBeLessThan(50);
      console.log(after, 'ms in postgreSQL');
      done();
    })
  })
  describe('GET one by id - mongoDB', () => {
    var dbase;
    MongoClient.connect(url, async (err, db) => {
      dbase = db.db('REIproducts')
    })
    it('expect a MongoDB find({productId}) to have an Execution Time under 50ms with a productId > 9000000', async (done) => {
      var randomIdx = Math.floor(Math.random() * (10000000-9000000) + 9000000);
      var before = new Date();
      var result = await dbase.collection('products').findOne({productId: randomIdx});
      var after = new Date() - before;
      expect(after).toBeLessThan(50);
      console.log(after, 'ms in mongoDB');
      done();
    })
  })
  describe('GET one by id - mongoose', () => {
    const Product = require('./database');
    it('expect a Mongoose find({productId}) to have an Execution Time under 50ms with a productId > 9000000', async (done) => {
      var randomIdx = Math.floor(Math.random() * (10000000-9000000) + 9000000);
      var before = new Date();
      var result = await Product.find({productId: randomIdx});
      var after = new Date() - before;
      expect(after).toBeLessThan(50);
      console.log(after, 'ms in mongoose');
      done();
    })
  })
}