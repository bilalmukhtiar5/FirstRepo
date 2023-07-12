const  userModel = require('../models/UserModels')
const bcrypt = require('bcryptjs')

//register callback
    
const registerController = async(req,res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).send({message:'user alredy exists', success:false})
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({message: 'Register successffully', success: true})

    }catch (error) {
        console.log(error) 
            res.status(500).send({success:false, message: `register Controller ${error.message}`})
        }
}


const loginController =  () => {};

module.exports = {loginController, registerController};