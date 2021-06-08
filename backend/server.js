"use strict";

const express = require("express");
const morgan = require("morgan");

const { initMongoClient, db } = require("./db");
initMongoClient();

const { handlePost, getTeam, handleUpdate } = require("./handlers");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/get-team", getTeam);
app.post("/api/create-team", handlePost);
// app.delete("/api/delete-player/:id", deletePlayer)
app.post("/api/update-team", handleUpdate)


app.listen(8000, () => console.log(`Listening on port 8000`));
