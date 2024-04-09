import express ,{Request , Response}from 'express'
import cors from 'cors'
import  'dotenv/config'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI as string).then(()=>console.log("connected to DB"))


const app = express()
app.use(cors())

app.use(express.json())

app.get('/test',async (req:Request , res:Response) => {
    res.json({message:"Hello"})
})

app.listen( 7000 , () => {
    console.log('Server is running on port 7000')
})