require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const vruttaRoutes = require("./routes/vruttasRoutes");

const app = express();

//middleWare
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/vruttas", vruttaRoutes);

//connect to DB
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    //listening for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB on", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
