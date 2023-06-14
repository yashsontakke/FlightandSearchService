const { CityService } = require('../services/index');
const cityService = new CityService();

const createCity = async (req, res) => {
    try {
        console.log("i  am in controller");
        const city = await cityService.createCity(req.body);

        return res.status(201).json({
            data: city,
            success: true,
            error: {},
            message: "Successfully created the city"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Failed created the city"
        })
    }
}
const deleteCity = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            error: {},
            message: "Successfully deleted the city"
        })

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Failed to delete the city"
        })
    }
}
const updateCity = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: city,
            success: true,
            error: {},
            message: "Successfully updated the city"
        })

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Failed to update the city"
        })
    }
}
const getCity = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            success: true,
            error: {},
            message: "Successfully retrived the city"
        })

    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Failed to retrive the city"
        })
    }
}

const getCities = async (req,res)=>{
    try {
        console.log(req.query);
        const cities = await cityService.getCities(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            error: {},
            message: "Successfully retrived cities"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: "Failed to retrive cities"
        })
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getCity,
    getCities
}