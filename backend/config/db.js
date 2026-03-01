import mongoose from "mongoose"

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://olayemiomolisa:198080@cluster0.nvv1kit.mongodb.net/Justring').then(()=>console.log("DB Connected"));

}