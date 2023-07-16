const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        console.log(flightRequestData);
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}
const getFlightById = async (req, res) => {
    try {
        const flightId = req.params.id; // Assuming the flight ID is passed as a URL parameter
        const flight = await flightService.getFlightById(flightId);
        return res.status(200).json({
            data: flight,
            success: true,
            error: {},
            message: "Flight retrieved successfully",
        });
    } catch (error) {
        console.log("Unable to retrieve flight in controller:", error);
        return res.status(500).json({
            data: null,
            success: false,
            error: "Internal Server Error",
            message: "Unable to retrieve flight",
        });
    }
};
const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        });
    }
}



module.exports = {
    create,
    getFlightById,
    getAll
}