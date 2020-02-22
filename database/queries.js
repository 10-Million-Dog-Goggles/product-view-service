const Pool = require('pg').Pool
const pool = new Pool({
  user: 'christianbueno',
  host: 'localhost',
  database: 'reiproducts',
  password: 'Kiba11234!',
  port: 5433,
})

module.exports = {

  getUserById : (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM images JOIN product ON images.product_id = product.id where product.id = $1 limit 6;', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }
};