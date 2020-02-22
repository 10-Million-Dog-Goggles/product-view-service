// const helpers = require('../database/dbHelpers.js');
const mongodb = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/REIproducts';

mongoClient.connect(url, (err, client) => {
  db = client.db('REIproducts') 
})

const controllers = {
  get: (req, res) => {
    helpers.get()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  create: (req, res) => {
    helpers.create(req.body)
      .then(() => {
        res.status(201).send()
      })
      .catch((err) => {
        res.status(401).send(err)
      })
  },

  getOne: (req, res) => {
    //req.baseUrl.slice(1)
    var productId = parseInt(req.params.productId);
    // helpers.getOne(req.params.productId)
    console.log(productId)
    db.collection('products').findOne({"productId": productId})
      .then((data) => {
        var product = [{
          _id: data._id,
          productId: data.productId,
          name: data.name,
          brand: data.brand,
          item: data.item,
          color: data.color,
          rating: data.rating,
          price: data.price,
          size: data.size,
          images: data.images.split('|'),
          description: data.description.split('|')
        }]
        console.log(product)
        res.status(202).send(product);
      })
      .catch((err) => {
        res.status(402).send(err);
      })
  },

  getByName: (req, res) => {
    helpers.getByName(req.params.name)
      .then((data) => {
        res.status(208).send(data)
      })
      .catch((err) => {
        res.status(408).send(err)
      })
  },

  update: (req, res) => {
    helpers.update(req.params.productId, req.body)
      .then((item) => {
        res.status(203).send(item)
      })
      .catch((err) => {
        res.status(403).send(err)
      })
  },

  delete: (req, res) => {
    helpers.delete(req.params.productId)
      .then(() => {
        res.status(204).send()
      })
      .catch((err) => {
        res.status(404).send(err)
      })
  }
}

module.exports = controllers;