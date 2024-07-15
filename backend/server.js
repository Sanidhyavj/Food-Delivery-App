import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'


//app config
 const app = express()
 const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/", (req,res) => {
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://sanidhya1029:Messiisagod12@cluster0.r8l6kbp.mongodb.net/?
//mongodb+srv://sanidhya1029:Messiisagod12@cluster0.r8l6kbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0