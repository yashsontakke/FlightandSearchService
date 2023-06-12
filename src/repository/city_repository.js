const city = require("../models/city");
const {City} = require("../models/index"); 

class cityrepository{

     async createCity({name}){
        try {
            const existingCity = await City.findOne({ where: { "name": name } });
            if (existingCity) {
                throw new Error('User with the same name already exists');
              } else {
                const city = await City.create({name});
                return city ;
              }
            
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
            console.log("unable to delete city")
            throw(error);
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await City.findOne({ where: { id: cityId } });
            city.name = data;
            await city.save();
            return city ;
        } catch (error) {
            console.log("unable to update city")
            throw(error);
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            console.log(city);
            return city ;
        } catch (error) {
            console.log("unable to get city")
            throw(error);
        }
    }
}

module.exports= cityrepository;