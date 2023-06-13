const { CityRepository } = require("../repository/index");
class CityService {

    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            console.log("i m in service");
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            throw (error);
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId)
        } catch (error) {
            console.log("unable to delete city")
            throw (error);
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("unable to update city")
            throw (error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("unable to get city")
            throw (error);
        }
    }

}
module.exports = CityService;