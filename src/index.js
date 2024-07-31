// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('MongoDB connection failed!!!', err);
    });


















/*
import express from "express"
const app = express()

    ; (async () => {

        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME
                }`)
            app.on("error", () => {
                console.log("Error:", error);
                throw error
            })


            app.listen(process.env.PORT, () => {
                console.log(`App is listening on Port 
                ${process.env.PORT}`);
            })

        }
        catch (error) {
            console.log("Error:", error)
            throw err
        }

    })()
*/        