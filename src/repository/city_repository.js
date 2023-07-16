const { City } = require("../models/index");
const {Sequelize} = require('sequelize');

class CityRepository {

    async createCity({ name }) {
        try {
            
            const existingCity = await City.findOne({ where: { "name": name } });
            if (existingCity) {
                console.log("already exists");
                throw new Error('User with the same name already exists');
            } else {
                const city = await City.create({ name });
                return city;
            }

        } catch (error) {
            console.log("unable to create city")
            throw (error);


        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            console.log("unable to delete city")
            throw (error);
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.findOne({ where: { id: cityId } });
            city.name = data.newName;
            await city.save();
            return city;
        } catch (error) {
            console.log("unable to update city")
            throw (error);
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("unable to get city")
            throw (error);
        }
    }

    async getCities ({search}){
        try {
            if(search){
                console.log(search);
                const cities = await City.findAll({
                    where: {
                      name: {
                        [Sequelize.Op.startsWith]: search // Filter cities where the name starts with 'Delhi'
                      },
                    }
                  });
                  return cities ;
            }
    
            const cities = await City.findAll();
            return cities ;
        } catch (error) {
            console.log(error)
            throw (error);
        }
        

    }
}

module.exports = CityRepository;