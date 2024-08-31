import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectdb = mongoose.connect(process.env.MongoDB_Url);

console.log(connectdb);