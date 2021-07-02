import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config()

const app = express()



app.listen(3000, () => {
    console.log("Server is running");
})