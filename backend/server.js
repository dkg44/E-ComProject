const app= require("./app");

const dotenv= require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncauht Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to uncaught Expection`);
    process.exit(1);
})

// console.log(youtube); exmpl to check uncaught err

//config
dotenv.config({path:"backend/config/config.env"});
// connecting data base


connectDatabase();


const server = app.listen(process.env.PORT,()=>{
    // call back fun
    console.log(`server is working on port http://localhost:${process.env.PORT}`)
    // console.log(`server is working on port http://localhost:$4000`)

})

// unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to unhandled Promise rejection`);
    server.close(()=>{
        process.exit(1);
    }); 
});
