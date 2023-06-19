const express = require("express");
const {PORT , SYNC} = require("./config/serverConfig");
const bodyParser = require('body-parser');
const cityrepository = require("./repository/city_repository")
const apiRouter = require('./routes/index');
const db = require('./models/index');

const setupAndStarttheServer = async () =>{
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

  
    app.use('/api', apiRouter)
    // const router = express.Router();
    // app.post('/api/v1/city', (req, res) => {
    //     console.log(req.body.name);
    //     res.json({ message: `City name received: ${req.body.name}` });
        // Handle the POST request and send a response
    // });

    app.listen(PORT,async ()=>{
        console.log(`server started at port ${PORT}`);
        
        if(SYNC){
            db.sequelize.sync({alter:true});
        }
        // app.use('/api', apiRouter)
        // const city_repository = new cityrepository();
        // city_repository.createCity({name:"Nandeddd"});
        // city_repository.getCity(5);
        // city_repository.updateCity(4,"Latur");
        // city_repository.deleteCity(13);
    })
}

setupAndStarttheServer();
