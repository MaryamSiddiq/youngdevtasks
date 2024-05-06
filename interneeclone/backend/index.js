import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


const PORT = process.env.PORT || 2000;
const URL = process.env.MONGOURL;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL");
    app.listen(PORT, () => {
      console.log(`Server is running on port number: ${PORT}`);
    });
  })
  .catch(error => {
    console.error("DB CONNECTION ERROR:", error);
  });


/*to create an api
app.get("/apia",(req,res)=>{
  res.send("erfgshdvhdbsjdnbhvs  xchjsk,c jxnc x cxjhsbkus")
})*/
app.use('/api', route);

