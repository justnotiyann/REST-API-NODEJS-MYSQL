const router = require('express').Router()
const {getProducts,addProducts} = require('../controllers/Products')


router.get('/',getProducts)
router.get('/all',(req,res)=>{
  res.render('tambah-products',
    {
      layout: './layout/main',
      title:'Halaman Utama'
  })
})
router.post('/add',addProducts)


module.exports = router
