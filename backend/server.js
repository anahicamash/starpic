const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const favoriteRoutes = require("./app/routes/favorite");
const PORT = process.env.PORT || 4400;
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//db conection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Correctly connected to MONGODB"))
  .catch((error) => console.error(error));

//router
app.use("/api",favoriteRoutes);//user endpoint

// simple route
app.get("/", (req, res) => {
  res.json({message:"Hi this is the backend"});
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
