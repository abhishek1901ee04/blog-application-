import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Router);


const PORT = process.env.PORT ||8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-ccn1iwq-shard-00-00.qfhbybs.mongodb.net:27017,ac-ccn1iwq-shard-00-01.qfhbybs.mongodb.net:27017,ac-ccn1iwq-shard-00-02.qfhbybs.mongodb.net:27017/?ssl=true&replicaSet=atlas-rs4o6g-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(url);

app.listen(PORT, () => console.log(`Server is running successfully  on PORT ${PORT}`));
