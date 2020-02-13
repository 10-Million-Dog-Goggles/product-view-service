const helpers = require('../database/dbHelpers.js');


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
    helpers.getOne(req.params.productId)
      .then((data) => {
        res.status(202).send(data);
      })
      .catch((err) => {
        res.status(402).send(err);
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