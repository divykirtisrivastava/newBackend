const db= require('../databaseConfig.js')
 
exports.userSave=(req,res)=>{
    let userName = req.body.userName
    let userNumber = req.body.userNumber
    let userAddress= req.body.userAddress
    let userCity= req.body.userCity
    let userPincode= req.body.userPincode
    let userState= req.body.userState
   

    let value=[[userName,userNumber,userAddress,userCity,userPincode,userState]]
    let sql=`insert into user_table(userName,userNumber,userAddress,userCity,userPincode,userState) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("User details submitted")
        }
    })
}

exports.getUser = (req, res)=>{
    let sql = 'select * from user_table'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}
exports.deleteUser = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from user_table where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('user data deleted')
        }
    })
}

exports.viewUser = (req,res)=>{
    let id = req.params.id
    let sql = "select * from user_table where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.updateUser = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update user_table set  ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('user data updated')
        }
    })
}