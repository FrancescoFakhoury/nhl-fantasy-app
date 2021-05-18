"use strict";

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());


app.listen(8000, () => console.log(`Listening on port 8000`));