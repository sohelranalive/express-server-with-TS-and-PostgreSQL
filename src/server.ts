import express, { Request, Response } from "express";
import { Pool } from "pg";
// const express = require("express");
const app = express();
const port = 5000;

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_Yb9fK3QEdGqw@ep-misty-shadow-a4emy48x-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

//parser
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: "API is working",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
