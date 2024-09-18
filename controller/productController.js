const db= require('../databaseConfig.js')

exports.productSave=(req,res)=>{
    let productTitle = req.body.productTitle
    let productName = req.body.productName
    let productRating= req.body.productRating
    let productDetail= req.body.productDetail
    let productCategory= req.body.productCategory
    let productPrice= req.body.productPrice
    let productSize= req.body.productSize  
    let productImage=req.file.filename

    let value=[[productTitle,productName,productRating,productDetail,productCategory,productPrice,productSize,productImage]]
    let sql=`insert into product_table(productTitle,productName,productRating,productDetail,productCategory,productPrice,productSize,productImage) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("product us details submitted")
        }
    })
}

exports.getProduct = (req, res)=>{
    let sql = 'select * from product_table'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}

exports.deleteProduct = (req, res)=>{
    let id = req.params.id
    let sql = 'delete from product_table where id = ?'

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send(' product data deleted')
        }
    })
}

exports.viewProduct = (req,res)=>{
    let id = req.params.id
    let sql = "select * from product_table where id = ?"
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updateProduct = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update product_table set  ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('product data updated')
        }
    })
}
