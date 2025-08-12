import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoutes from './routes/userRoutes.js';
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

//Middleware

app.use(express.json());
app.use(cors());

//Routes 
app.use("/api", userRoutes)

// Error handling Middleware
app.use(errorHandling)

//Create table before starting server
createUserTable();

//Testing POSTGRES Connection
app.get("/", async(req,res) =>{
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`)
})

// Server running
app.listen(port,()=>{
    console.log(`Server is running on http:localhost:${port}`)
})