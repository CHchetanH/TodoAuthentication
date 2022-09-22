import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import {connectDB} from "./config/db.js";

connectDB();
const app = express();

app.listen(process.env.PORT, () => {
	console.log(`Listening to port ${process.env.PORT}}`);
});

app.get("/", (req, res) => {
	console.log("Express router");
	res.json({Token: "Hello"});
});
