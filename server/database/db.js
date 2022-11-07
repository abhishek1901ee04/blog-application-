import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ccn1iwq-shard-00-00.qfhbybs.mongodb.net:27017,ac-ccn1iwq-shard-00-01.qfhbybs.mongodb.net:27017,ac-ccn1iwq-shard-00-02.qfhbybs.mongodb.net:27017/?ssl=true&replicaSet=atlas-rs4o6g-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;