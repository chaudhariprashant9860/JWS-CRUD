const user = require("../model/user")

const register = async = (req,res)=>{
    
    try {
        //let firstName= req.body.firstName
        let (firstName,lastName,email,password) = req.body
        if(!(firstName && lastName && email && password ))
        {
            res.status(400).send("All input are require")

        }
        //Vali
            const user = User.create({
                firstName:firstName,
                lastName :lastName,
                email : email,
                password:password
            })
            const emailExist =  await User.finOne({email})
            if(!emailExist){
                const user =await User.create({
                    firstName,
                    lastName,
                    email,
                    password
                })
            }

    } catch (error) {
        
    }
}

module.exports = register