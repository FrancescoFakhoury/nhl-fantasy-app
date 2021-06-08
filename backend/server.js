"use strict";

const express = require("express");
const morgan = require("morgan");

const { initMongoClient, db } = require("./db");
initMongoClient();

const { handlePost, getTeam, deletePlayer } = require("./handlers");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/get-team", getTeam);
app.post("/api/create-team", handlePost);
app.delete("/api/delete-player", deletePlayer)


app.listen(8000, () => console.log(`Listening on port 8000`));
