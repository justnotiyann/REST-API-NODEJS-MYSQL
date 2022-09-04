var router = require('express').Router();
const Products = require('../models/Products')
const {getProducts,addProducts} = require('../controllers/Products')

// Display Data Productss

router.get('/', function(req, res, next) {
  res.render('index',
    {
      layout: './layout/main',
      title:'Halaman Utama'
  })
});

router.get('/detail',async(req,res)=>{
  const result = await Products.findAll({})
  res.render('detail',
    {
      layout: './layout/main',
      title:'Halaman Utama',
      result
  })
})

router.post('/add',addProducts)

module.exports = router;
