const app= require("./app");

const dotenv= require("dotenv");

const connectDatabase = require("./config/database")
//config
dotenv.config({path:"backend/config/config.env"});
// connecting data base


connectDatabase();


app.listen(process.env.PORT,()=>{
    // call back fun
    console.log(`server is working on port http://localhost:${process.env.PORT}`)
    // console.log(`server is working on port http://localhost:$4000`)

})

