const {CityService} = require('../services/index');
const cityService = new CityService();

const createCity= async (req,res)=>{
    try {
        const city =  await cityService.createCity(req.data);
        return res.status(201).json({
            data:city,
            success:true ,
            error:{},
            message:"Successfully created the city"
        })

    } catch (error) {
        return res.status(200).json({
            data:{},
            success:false ,
            error:error,
            message:"Failed created the city"
        })
    }
}
const deleteCity= async (req,res)=>{
    try {
        const response =  await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true ,
            error:{},
            message:"Successfully deleted the city"
        })

    } catch (error) {
        return res.status(200).json({
            data:{},
            success:false ,
            error:error,
            message:"Failed to delete the city"
        })
    }
}
const updateCity= async (req,res)=>{
    try {
        const city =  await cityService.updateCity(req.data);
        return res.status(201).json({
            data:city,
            success:true ,
            error:{},
            message:"Successfully updated the city"
        })

    } catch (error) {
        return res.status(200).json({
            data:{},
            success:false ,
            error:error,
            message:"Failed to update the city"
        })
    }
}
const getCity= async (req,res)=>{
    try {
        const city =  await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true ,
            error:{},
            message:"Successfully retrived the city"
        })

    } catch (error) {
        return res.status(200).json({
            data:{},
            success:false ,
            error:error,
            message:"Failed to retrive the city"
        })
    }
}

module.exports={
    createCity,
    deleteCity,
    updateCity,
    getCity
}