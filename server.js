import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import messageRoute from './routes/messageRoute.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000;

//connect to mongodb server
mongoose.connect(
    "mongodb+srv://bijayadhs:bijayadhs@bijayadhs107.d4bvl.mongodb.net/message?retryWrites=true&w=majority"
    , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    }).then(() => console.log('MongoDB connected....'))
    .catch((err) => console.log("Database connection error", err));


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/', messageRoute);

app.listen(PORT, console.log(`Server is running at port ${PORT}`))
