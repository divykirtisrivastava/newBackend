const express=require('express')
const router=express.Router()
const productController = require('../controller/productController.js')
const uploads=require('../multerConfig.js')


router.post('/productSave',uploads.single('productImage'),productController.productSave)
router.get('/getProduct', productController.getProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)
router.get('/viewProduct/:id',productController.viewProduct)
router.put('/updateProduct/:id', productController.updateProduct)

module.exports=router