import express from "express"
import UrlRoute from "./Routes/url.js"
import userRoutes from "./Routes/userRoutes.js"
import cors from "cors"
import dotenv from "dotenv";
import {handleConnectToMongoDb} from "./Connection/db.js"
import {notFound,errorHandler} from './middlewares/errorMiddleware.js'
dotenv.config();

const app = express();
const PORT =process.env.PORT|| 8001;

const mongoUrl = "mongodb://127.0.0.1:27017/shorturl";
//connection MongoDb
handleConnectToMongoDb(mongoUrl).then(console.log("connected to mongodb")).catch("error");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/user",userRoutes);
app.use("/url",UrlRoute);


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


app.listen(PORT,()=>console.log(`Server started on Port ${PORT}`));