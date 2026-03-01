import {requestBooking } from "../controller/requestController.js"
import express from "express"
import userAuth from "../middleware/auth.js"


const bookingRouter = express.Router()

bookingRouter.post("/request",requestBooking)


export default bookingRouter;
