const express = require("express");
const {PORT} = require("./config/serverConfig");

const setupAndStarttheServer = async () =>{
    const app = express();
   
    
    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);
    })
}

setupAndStarttheServer();
