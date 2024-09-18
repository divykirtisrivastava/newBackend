const express=require('express')
const router=express.Router()
const paymentController =  require('../controller/paymentController.js')

router.post('/paymentSave',paymentController.paymentSave)
module.exports=router