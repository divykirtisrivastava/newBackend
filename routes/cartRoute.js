const express=require('express')
const router=express.Router()
const cartController = require('../controller/cartController.js')
const uploads=require('../multerConfig.js')

router.post('/cartSave',uploads.single('cartImage'),cartController.cartSave)
router.get('/getCart', cartController.getCart)
router.delete('/deleteCart/:id', cartController.cartSave)
router.get('/viewCart/:id',cartController.viewCart)
router.put('/updateCart/:id', cartController.updateCart)
module.exports=router