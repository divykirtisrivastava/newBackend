const db= require('../databaseConfig.js')

exports.paymentSave=(req,res)=>{
    let paymenType = req.body.paymenType
    let amount = req.body.amount
  
    let value=[[paymenType,amount]]
    let sql=`insert into payment_table(paymenType,amount) values ?`
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send("payment details submitted")
        }
    })
}