import * as mongoose from "mongoose";

const DB_URL: string = process.env.CONNECTION_STRING!
const connectMongoDb = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb