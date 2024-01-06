#!/usr/bin/env node
// Do not modify above line. It is for the production server so that the backend API can run stand alone.
import cors from "cors";
import express from "express";
import Router from "./Supports/Router.js";

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/api", Router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
