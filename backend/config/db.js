import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanidhya1029:Messiisagod12@cluster0.r8l6kbp.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}