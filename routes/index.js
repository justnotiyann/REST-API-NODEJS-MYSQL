var router = require('express').Router();
const {getProducts,addProducts} = require('../controllers/Products')

// Display Data Productss

router.get('/', function(req, res, next) {
  res.render('index',
    {
      layout: './layout/main',
      title:'Halaman Utama'
  })
});

router.post('/add',addProducts)

module.exports = router;
