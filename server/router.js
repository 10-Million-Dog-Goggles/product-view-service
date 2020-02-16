const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/api')
  .get(controllers.get)
  .post(controllers.create)

router
  .route('/api/:productId')
  .get(controllers.getOne)
  .put(controllers.update)
  .delete(controllers.delete)

router
  .route('/api/name/:name')
  .get(controllers.getByName)

module.exports = router;