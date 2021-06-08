"use strict";

const express = require("express");
const morgan = require("morgan");

const { initMongoClient, db } = require("./db");
initMongoClient();

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.post("/api/create-team", (req, res) => {
    db().collection("Teams").insertMany(req.body);
});

app.listen(8000, () => console.log(`Listening on port 8000`));
