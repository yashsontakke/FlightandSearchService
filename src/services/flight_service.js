const {FlightRepository,AirplaneRepository} = require("../repository/index");
const { compareTime } = require('../utils/helper');

class FLightService {
    
    constructor(){
        this.flightrepository = new FlightRepository();
        this.airplanerepository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            // if(!compareTime(data.arrivalTime, data.departureTime)) {
            //     throw new Error('Arrival time cannot be less than departure time');
            // }
            const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
            console.log(airplane.capacity);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getFlightById(id) {
        try {
          const flight = await this.flightrepository.getFlightById(id);
          // Perform additional operations if needed
          return flight;
        } catch (error) {
          console.log("Something went wrong at the service layer");
          throw error;
        }
      }
}

module.exports = FLightService;