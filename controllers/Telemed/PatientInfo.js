const Patient = require('../../models/Telemed/PatientInfo')

exports.RegisterPatient = async (req, res, next)=>{
    try{
        const {Surname,  FirstName, Email,  ChooseDate, ChooseTime, ServiceType, Notes, Location} = req.body

        const patient = await Patient.create(req.body);

        return res.status(201).json({
            success: true,
            message: 'Appointment has been successfully registered in the system',
            data: patient
        })
    }catch (err){
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages,
            })
        }else{
            console.log(err);
            return res.status(500).json({
                success: false,
                error: 'server error'
            }) 
        }
    }

}

exports.FindPatient = async (req, res, next)=>{
    try{
        const {Email} = req.body

        Patient.find({Email:Email}, (err,  patient)=>{
            if (!patient){
                return res.status(500).json({
                    success: false,
                    error: 'This record could not be found inside the database.'
                }) 
            }else{
                return res.status(200).json({ 
                    success: true,
                    message: 'record found in sytsem',
                    count: patient.length,
                    data: patient
                })
            }
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error '
        })
    }
}

exports.CityBookings = async (req, res, next) => {
    try{
        const {Location} = req.body

        Patient.find({Location:Location}, (err,  location)=>{
            if (!location){
                return res.status(500).json({
                    success: false,
                    error: 'This location has no bookings on record.'
                }) 
            }else{
                return res.status(200).json({ 
                    success: true,
                    message: 'The following bookings have been made in '+ location ,
                    count: location.length,
                    data: location
                })
            }
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            error: 'Server Error '
        })
    }
}

exports.UpdatePatient = async (req, res, next)=>{

    try{
        
        const {Surname,  FirstName, Email,  ChooseDate, ChooseTime, ServiceType, Notes, Location} = req.body

      const patient = await Patient.find({Email: Email});

      if (!this.RegisterPatient){
        return res.status(404).json({
            success: false,
            error: 'The record you want to update does not exist in the system'
        })
      }
      await patient.updateOne(req.body);
        return res.status(200).json({
            message: "Operation completed successfuly",
            success: true,
            data: patient
        });
    }catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error contact admin'
        })
    }
}

exports.DeleteDevice = async (req, res, next)=>{
    try {
        const task = await Task.findById(req.params.id);

        if (!task){
            return res.status(404).json({
                success: false,
                error: 'No Account found'
            })
        }

        await task.remove();
        return res.status(200).json({
            success: true,
            data: {}
        });
    }catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}