const mongoose = require('mongoose');

const ServiceScheme = new mongoose.Schema({
    ServiceName:{
        Type: String,
        trim: true,
        required: [true, 'Please enter the name of the facility to proceed']
    },
    Type:{
        Type: String,
        trim: true,
        required: [true, 'Please enter the type of service you are']
    },
    Email: {
        type: String,
        unique: [true,'this email is already taken'],
        trim: true,
        required: [true, 'please enter the email you wish to register with'],
    },
    Location: {
        type: String,
        trim: true, 
        required: [true, 'please pick the location you are located at'],
       
    },
    ServiceType: {
        type: String,
        trim: true, 
        required: [true, 'please enter the services that you offer'],
       
    },
    
   

})

module.exports = mongoose.model('Service', ServiceScheme);