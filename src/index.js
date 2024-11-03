import express from "express";
import { connectToDB } from "./config/db.js";
import "dotenv/config";

const app = express();

//* connecting to database
connectToDB();

app.listen(8000, () => {
    console.log(`Server is listening on 8000`);
});
