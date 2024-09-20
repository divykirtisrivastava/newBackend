const express=require('express')
const router=express.Router()
const cartController = require('../controller/cartController.js')
const uploads=require('../multerConfig.js')

router.post('/cartSave/:user',cartController.cartSave)
router.get('/getCart/:user', cartController.getCart)
router.delete('/deleteCart/:id/:user', cartController.deleteCart)
router.get('/viewCart/:id',cartController.viewCart)
router.put('/updateCart/:id', cartController.updateCart)
module.exports=router