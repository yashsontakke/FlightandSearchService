const express = require('express')
const router = express.Router()
const city_controller= require('../../controllers/city_controller');

// define the home page route
// console.log("in v12 api");
router.post('/city', city_controller.createCity);
router.get('/city/:id', city_controller.getCity);
router.patch('/city/:id', city_controller.updateCity);
router.delete('/city/:id', city_controller.deleteCity);
router.get('/cities',city_controller.getCities);

module.exports = router