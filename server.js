import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

const PORT = 8000;
//middleware
app.use(express.json());
app.use(cors()); //allow cross origin access from different server frontend end
app.use(morgan("dev")); //log all the server requests

//db connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

//router
import router from "./src/routers/userRouter.js";
app.use("/users", router);

//request handler
app.use("/", (req, res) => {
  res.json({
    message: "hellow world",
  });
});
//run node app in the web server

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is running at http://localhost: ${PORT}`);
});
