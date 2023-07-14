const {FlightRepository,AirplaneRepository} = require("../repository/index");
const { compareTime } = require('../utils/helper');

class FLightService {
    
    constructor(){
        this.flight_repository = new FlightRepository();
        this.airplaneRespository = new AirplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
            const flight = await this.flightrespository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = FLightService;