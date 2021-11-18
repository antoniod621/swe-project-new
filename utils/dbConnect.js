import mongoose from 'mongoose';
import { connect } from 'mongoose';

const connection = {};

async function dbConnect(){

    if(connection.isConnected){
        console.log('MongoDB is Connected');
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    });

    connection.isConnected = db.connections[0].readyState;
    console.log('MongoDB is Connected');
    console.log(connection.isConnected);
}

export default dbConnect;