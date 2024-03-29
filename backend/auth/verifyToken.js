import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate = async (req,res,next) =>{
    // get token from headers
    const authToken = req.headers.authorization

    //check token if exists
    if(!authToken || !authToken.startsWith('Bearer ')){
        return res.status(401).json({success:false, message:"NO token, authorization denied"})
    }

    try{
        const token = authToken.split(" ")[1];

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId =decoded.id
        req.role = decoded.role


        next() //must be called
    }
    catch(err){
        if(err.name=== 'TokenExpiredError'){
            return res.status(401).json({message:'Token is expired'})
        }
        return res.status(401).json({success:false, message:'Invalid Token'})
    }
}


export const restrict = roles => async(req,res,next) =>{
    const userId = req.userId;

    try {
        let user;

        const patient = await User.findById(userId);
        const doctor = await Doctor.findById(userId);

        if(patient){
            user=patient;
        }
        if(doctor){
            user=doctor;
        }

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: "You are not authorized" });
        }

        next();
    } catch (error) {
        console.error('Error in restrict middleware:', error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
