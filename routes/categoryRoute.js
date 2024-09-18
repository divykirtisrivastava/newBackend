const express=require('express')
const router=express.Router()
const categoryController = require('../controller/categoryController.js')
const uploads=require('../multerConfig.js')

router.post('/shop/categorysave',categoryController.categorySave)
router.get('/shop/categoryget',categoryController.categoryGet)
// router.put('/shop/categoryupdate',categoryController.categoryUpdate)
router.delete('/shop/categorydelete/:id',categoryController.categoryDelete)
module.exports=router