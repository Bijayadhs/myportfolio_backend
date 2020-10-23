import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import messageRoute from './routes/messageRoute.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

//connect to mongodb server
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected....'))

app.use(morgan('dev'));
app.use(cors());
app.use('/api', messageRoute);

app.listen((port) => console.log(`Server is running at port ${PORT}`))
