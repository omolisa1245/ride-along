import formModel from "../models/infoModel.js";
import userModel from "../models/userModel.js";
import validator from "validator"
import jwt from "jsonwebtoken"
import transporter from "../config/nodemailer.js";


const infoForm = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {

        const infoForm = {
            name,
            email,
            subject,
            message
        }

        const newForm = new formModel(infoForm);


        await newForm.save();

        // // sending welcome email
        // const mailOption = {
        //     from: process.env.EMAIL,
        //     to: email,
        //     subject: 'Welcome to RideAlong',
        //     text: `kindly note that we have receive your request. We will reached out to you shortly via this email id:${email}. Thank you for your patience`
        // }

        // await transporter.sendMail(mailOption);


        res.json({ success: true, message: "Thank you for your information request! We will get back to you shortly." })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "error" });

    }

}


export { infoForm }