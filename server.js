const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();
connectDB();

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('dev'))


// routes
app.use('/api/v1/test', require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'))
//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`.bgBlue.white);
})