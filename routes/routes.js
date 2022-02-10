const express = require('express');
const router = express.Router();

const {RegisterPatient, FindPatient, UpdatePatient, CityBookings} = require('../controllers/Telemed/PatientInfo') 

/////////////////////////////////////Telemedicine Routes////////////////////////////////////////////
//router.post('/registerPatient', RegisterPatient);
router.post('/updatePatient', UpdatePatient);
router.get('/findPatient', FindPatient);
router.get('/citysearch', CityBookings);

module.exports = router;