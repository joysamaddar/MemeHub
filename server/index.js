const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const memeRoutes = require("./routes/memes")

const app = express()

require('dotenv').config()

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

app.use("/memes", memeRoutes)

const CONNECTION_URL = process.env.MONGO_CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
.catch((error)=>console.log(error.message))