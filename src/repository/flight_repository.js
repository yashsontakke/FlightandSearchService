const { Flights } = require("../models/index");
const { Op } = require('sequelize');

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getFlightById(id) {
        try {
            const flight = await Flights.findByPk(id);
            console.log(flight);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getAllFlights(queryParams) {
        try {
          const { minPrice, maxPrice, arrivalAirportId, departureAirportId } = queryParams;

          const filters = {};
          if (arrivalAirportId) {
            filters.arrivalAirportId = arrivalAirportId;
          }
    
          if (departureAirportId) {
            filters.departureAirportId = departureAirportId;
          }
    
          if (minPrice && maxPrice) {
            filters.price = {
              [Op.between]: [minPrice, maxPrice],
            };
          } else if (minPrice) {
            filters.price = {
              [Op.gte]: minPrice,
            };
          } else if (maxPrice) {
            filters.price = {
              [Op.lte]: maxPrice,
            };
          }
    
          const flights = await Flights.findAll({ where: filters });
    
          return flights;
        } catch (error) {
          console.log('Unable to fetch flights in repository:', error);
          throw error;
        }
      }
}

module.exports = FlightRepository;
