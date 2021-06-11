"use strict";

const express = require("express");
const morgan = require("morgan");

const { initMongoClient, db } = require("./db");
initMongoClient();

const {
  handlePost,
  getTeam,
  handleUpdate,
  handleDelete,
} = require("./handlers");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/api/get-team", getTeam);
app.post("/api/create-team", handlePost);
app.post("/api/update-team", handleUpdate);
app.delete("/api/delete-team", handleDelete);

app.listen(8000, () => console.log(`Listening on port 8000`));
