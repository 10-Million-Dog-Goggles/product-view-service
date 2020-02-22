const router = require('express').Router();
const controllers = require('./controllers.js');
const postgrescontroller = require('../database/queries.js');

router
  .route('/api')
  .get(controllers.get)
  .post(controllers.create)

router
  .route('/api/:productId')
  .get(controllers.getOne)
  .put(controllers.update)
  .delete(controllers.delete)

// router
//   .route('/api/:id')
//   .get(postgrescontroller.getUserById)

router
  .route('/api/name/:name')
  .get(controllers.getByName)

module.exports = router;