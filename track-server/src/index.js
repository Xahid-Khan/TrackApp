require("./modals/user");
require("./modals/track");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const trackRoutes = require("./routes/trackRoutes");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = "mongodb+srv://admin:lFmBga7esVFjERNz@cluster0.tzya602.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", ()=> {
    console.log("Connected to Mongo DB");
})
mongoose.connection.on("error", (err) => {
    console.log(err);
})


app.get("/", requireAuth, (req, res) => {
    res.send(`Your EmaiL: ${req.user.email}`);
});



app.listen(3000, ()=> {
    console.log("Listening at port 3000");
})