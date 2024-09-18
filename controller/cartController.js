const db= require('../databaseConfig.js')

exports.cartSave=(req,res)=>{
    let cartName = req.body.cartName
    let cartCategory = req.body.cartCategory
    let cartImage= req.file.filename
   
   

    let value=[[cartName,cartCategory,cartImage]]
    let sql=`insert into cart_table(cartName,cartCategory,cartImage) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("cart details submitted")
        }
    })
}

exports.getCart = (req, res)=>{
    let sql = 'select * from cart_table'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteCart = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from cart_table where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send('cart data deleted')
        }
    })
}


exports.viewCart = (req,res)=>{
    let id = req.params.id
    let sql = "select * from cart_table where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.updateCart = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update cart_table set  ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('cart data updated')
        }
    })
}


