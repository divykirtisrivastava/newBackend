const db= require('../databaseConfig.js')

exports.createOrder = async (req, res) => {
  const { items, customerDetails } = req.body

  try {
    const { address, phone, email, paymentMethod } = customerDetails

    // Insert each item into the single orders table
    for (const item of items) {
      await db.query(`
        INSERT INTO orders (customer_address, customer_phone, customer_email, payment_method, product_id, product_title, quantity, product_price, product_discount, total_price)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          address,
          phone,
          email,
          paymentMethod,
          item.productId,
          item.productTitle,
          item.quantity,
          item.productPrice,
          item.productDiscount,
          item.totalPrice
        ]
      )
    }

    res.status(200).json({ message: 'Order created successfully' })
  } catch (error) {
    console.error('Error creating order:', error)
    res.status(500).json({ message: 'Error creating order', error })
  }
}
exports.ordersGet=(req,res)=>{
    let sql=`select * from orders`
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}
exports.ordersGetEmail=(req,res)=>{
    let email = req.params.email
    // console.log(email)
    let sql=`select * from orders where customer_email = ?`
    db.query(sql,[email],(err,result)=>{
        if(err) throw err
        else{
            // console.log(result)
            res.json(result)
        }
    })
}
exports.ordersUpdate=(req,res)=>{
    let id = req.params.id
    let data = req.body.status
    let sql=`update orders set status = ? where id = ?`
    db.query(sql,[data, id],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}