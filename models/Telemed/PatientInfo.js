const mongoose = require('mongoose');

const PatientScheme = new mongoose.Schema({
    Surname:{
        Type: String,
        trim: true,
        required: [true, 'Please enter your surname to proceed']
    },
    FirstName:{
        Type: String,
        trim: true,
        required: [true, 'Please enter your First Name to proceed']
    },
    Email: {
        type: String,
        unique: [true,'this email is already taken'],
        trim: true,
        required: [true, 'please enter the email you wish to register with'],
    },
    ChooseDate: {
        type: String,
        trim: true, 
        required: [true, 'please select a date for the appointment'],
       
    },
    ChooseTime: {
        type: String,
        trim: true, 
        required: [true, 'please select a time on the date for the appointment'],
       
    },
    ChooseTime: {
        type: String,
        trim: true, 
        required: [true, 'please select a service you are looking for'],
       
    },
   

})

module.exports = mongoose.model('Patient', PatientScheme);