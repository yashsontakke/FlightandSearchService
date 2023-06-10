const express = require("express");
const {PORT} = require("./config/serverConfig");
const bodyParser = require('body-parser');

const setupAndStarttheServer = async () =>{
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);
    })
}

setupAndStarttheServer();
