import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    name: { type:String,required:true},
    email:{type:String,required:true,unique:true},
    pickUp:{type:String,required:true},
    dropOff:{type:String,required:true},
    category:{type:String,default: "regular"},
    pickUpDate:{type:String,required:true}
})

const bookingModel = mongoose.model.booking || mongoose.model("booking", bookingSchema);

export default bookingModel;