import bookingModel from "../models/requestModel.js";
import userModel from "../models/userModel.js";
import validator from "validator"
import jwt from "jsonwebtoken"
import transporter from "../config/nodemailer.js";



const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


const requestBooking = async (req, res) => {
    const { name, email, pickUp, dropOff, category, pickUpDate } = req.body;

    const user = await userModel.findOne({ email });

    if (!name || !email || !pickUp || !dropOff || !category) {
        return res.json({ success: false, message: "Missing details" })

    }



    if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "invalid email adddress" })

    }

    try {

        const requestBooking = {
            name,
            email,
            pickUp,
            dropOff,
            category,
            pickUpDate
        }

        const newBooking = new bookingModel(requestBooking);


        await newBooking.save();
        const token = createToken(user)


        // // sending welcome email
        // const mailOption = {
        //     from: process.env.EMAIL,
        //     to: email,
        //     subject: 'Welcome to RideAlong',
        //     text:  `kindly note that we have receive your request. We will reached out to you shortly via this email id:${email}. Thank you for your patience`
        // }

        // await transporter.sendMail(mailOption);

        res.json({ success: true,token })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "error" });

    }

}


export {requestBooking}