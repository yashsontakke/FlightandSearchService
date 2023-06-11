const {City} = require("../models/index"); 

class cityrepository{

     async createCity({name}){
        try {
            const city = await City.create({name});
            return city ;
        } catch (error) {
            console.log("unable to create city")
            throw(error);
            
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                  id: cityId
                }
              })
        } catch (error) {
            console.log("unable to create city")
            throw(error);
        }
    }
}

module.exports= cityrepository;