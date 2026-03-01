import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config";
import formRouter from "./routes/infoRoutes.js";
import bookingRouter from "./routes/requestRoutes.js";


// app config
const app = express();
const port = 3000

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// DB connection
connectDB();


//api end point
app.use("/api/user/",userRouter)
app.use("/api/form/", formRouter)
app.use("/api/booking/", bookingRouter)

app.get("/", (req,res)=> {
    res.send("api initiating")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})