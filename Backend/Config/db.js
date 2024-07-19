import mongoose from "mongoose"

const connectDb = async()=>{
    try {
        const connection = await
        mongoose.connect("mongodb://localhost:27017/bookstore")
        console.log("Database connected")
    } catch (error) {
        
    }
}
export default connectDb;