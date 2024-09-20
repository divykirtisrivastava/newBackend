const mysql= require('mysql')
let connection=mysql.createConnection({
    host: "localhost",
    user:"root",
    database: "ecommerce",
    // password:'1234'

})
module.exports=connection