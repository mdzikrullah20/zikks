import mongoose from "mongoose";

export  async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL as string);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
}