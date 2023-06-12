const {CityRepository} = require("../repository/index");
class CityService {

    constructor(){
        this.cityRepository= new CityRepository();
    }

    async createCity({name}){
        try {
            const existingCity = await this.cityRepository({ where: { "name": name } });
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
            const response = await this.cityRepository.destroy({
                where: {
                  id: cityId
                }
              })
              return response;
        } catch (error) {
            console.log("unable to delete city")
            throw(error);
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.findOne({ where: { id: cityId } });
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
            const city = await this.cityRepository.findByPk(cityId);
            console.log(city);
            return city ;
        } catch (error) {
            console.log("unable to get city")
            throw(error);
        }
    }

}
module.exports={CityService}