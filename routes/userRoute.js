const express=require('express')
const router=express.Router()
const userController = require('../controller/userController.js')


router.post('/userSave',userController.userSave)
router.get('/getUser', userController.getUser)
router.delete('/deleteUser/:id', userController.deleteUser)
router.get('/viewUser/:id',userController.viewUser)
router.put('/updateUser/:id', userController.updateUser)

module.exports=router