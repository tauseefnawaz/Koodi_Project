//import express from 'express';
//import bodyParser from 'body-parser';
//import cors from 'cors';
//import mongoose from 'mongoose';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./routes/routes');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({useTempFiles:true}));

app.use('/user', route);

const Port = 5000 || process.env.PORT;

mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex:true,
    useFindAndModify:false ,
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => app.listen(Port, () => { console.log("Server running on port"); console.log(Port); }))
    .catch((error) => { console.log(error.message) });
    

