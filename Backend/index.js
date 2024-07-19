import express from "express";
import connectDb from "./Config/db.js"
import bookRoute from "./Route/book.route.js"
import cors from "cors"
import userRoute from "./Route/user.route.js";

const app = express();
connectDb();
 
app.use(cors());
app.use(express.json());
app.use("/book",bookRoute);// localhost5000/book
app.use("/user",userRoute);//localhost5000/user

app.listen(5000,()=>console.log("Server running on port 5000"))