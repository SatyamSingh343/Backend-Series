import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))

app.use(express.json({limit:"16kb"})) // for form filling

app.use(express.urlencoded({extended:true,limit:"16kb"}))//can give objects in objects using extended

app.use(cookieParser())

app.use(express.static("public"))


export {app}