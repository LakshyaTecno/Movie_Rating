const express = require("express");
//const cors =require("cors")
const app = express();
const serverConfig = require("./configs/server.config");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const init = require("./init");


//app.use(cors())
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true })); //extended:true  accept  other  Datatype also  beside string
app.use(express.static("public"));


mongoose.connect(dbConfig.DB_URL);
mongoose.set("strictQuery", false);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connected to mongodb");
});

db.once("open", () => {
  console.log("connected to mongodb");
  init();
});


require("./routes/movie.route")(app);

console.log(serverConfig);
app.listen(serverConfig.PORT, () => {
  console.log("Started the server on the PORT number :", serverConfig.PORT);
});