const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config.json");
const userRouter = require("./routes/user-router.js");

const app=express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());

app.use(userRouter);

app.listen(config.port, () => console.log(config.serverStartMessage, config.host, config.port));


