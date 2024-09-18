const express= require('express')
const db= require('./databaseConfig.js')
const cors=require('cors')
const dotenv= require('dotenv')
dotenv.config({path:'./.env'})
const productRoute= require('./routes/productRoute.js')
const userRoute = require('./routes/userRoute.js')
const categoryRoute= require('./routes/categoryRoute.js')
const cartRoute = require('./routes/cartRoute.js')
const paymentRoute= require('./routes/paymentRoute.js')



let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
db.connect((err)=>{
if(err) throw err
else{
    console.log("database connected")
}
})

// let productTableQuery=`
// CREATE TABLE IF NOT EXISTS product_table(
// id INT NOT NULL AUTO_INCREMENT,
// productTitle VARCHAR(255) NULL,
// productName VARCHAR(255) NULL,
// productRating VARCHAR(255) NULL,
// productDetail VARCHAR(255) NULL,
// productCategory VARCHAR(255) NULL,
// productPrice VARCHAR(255) NULL,
// productSize VARCHAR(255) NULL,
// productImage VARCHAR(255) NULL,
// PRIMARY KEY (id));
// `
// db.query(productTableQuery, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("product table created successfull")
//     }
// })


// let userTableQuery=`
// CREATE TABLE IF NOT EXISTS user_table(
// id INT NOT NULL AUTO_INCREMENT,
// userName VARCHAR(255) NULL,
// userNumber VARCHAR(255) NULL,
// userAddress VARCHAR(255) NULL,
// userCity VARCHAR(255) NULL,
// userPincode VARCHAR(255) NULL,
// userState VARCHAR(255) NULL,
// PRIMARY KEY (id));
// `
// db.query(userTableQuery, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("User table created successfull")
//     }
// })

let categoryTableQuery=`
CREATE TABLE IF NOT EXISTS category_table(
id INT NOT NULL AUTO_INCREMENT,
categoryName VARCHAR(255) NULL,
categoryDescription VARCHAR(255) NULL,
PRIMARY KEY (id));
`
db.query(categoryTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("category table created successfull")
    }
})

// let cartTableQuery=`
// CREATE TABLE IF NOT EXISTS cart_table(
// id INT NOT NULL AUTO_INCREMENT,
// cartName VARCHAR(255) NULL,
// cartCategory VARCHAR(255) NULL,
// cartImage VARCHAR(255) NULL,
// PRIMARY KEY (id));
// `
// db.query(cartTableQuery, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("cart table created successfull")
//     }
// })

// let paymentTableQuery=`
// CREATE TABLE IF NOT EXISTS payment_table(
// id INT NOT NULL AUTO_INCREMENT,
// paymenType VARCHAR(255) NULL,
// amount VARCHAR(255) NULL,
// PRIMARY KEY (id));
// `
// db.query(paymentTableQuery, (err, result)=>{
//     if(err) throw err
//     else{
//         console.log("payment table created successfull")
//     }
// })

app.use('/api',productRoute)
app.use('/api',userRoute)
app.use('/api',categoryRoute)
app.use('/api',cartRoute)
app.use('/api', paymentRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})