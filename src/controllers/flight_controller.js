const {FlightService} = require("../services/index");

const flightService = new FlightService();

const createFlight = async (req,res) =>{
        try {
            const flight = flightService.createFlight(req.body);
            return res.status(201).json({
                data: flight,
                success: true,
                error: {},
                message: "Successfully created the flight"
            })
        } catch (error) {
            console.log('unable to create Flight in controller');
        }
}

module.exports ={
    createFlight
}