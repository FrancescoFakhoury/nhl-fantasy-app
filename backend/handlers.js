const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Delete team

const handleDelete = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("Fantasy-team");

  await db.collection("Teams").remove({});

  client.close();
  console.log("disconnected yay!");
};

//POST teams

const handlePost = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("Fantasy-team");

  await db.collection("Teams").remove({});

  await db.collection("Teams").insertMany(req.body);
  client.close();
  console.log("disconnected!");
};

// get team

const getTeam = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();
  console.log("connected");

  const db = client.db("Fantasy-team");

  const teamFromMongo = await db.collection("Teams").find().toArray();
  console.log(teamFromMongo);

  // if (teamFromMongo.length === 0) {
  //   res
  //     .status(404)
  //     .json({ status: 404, message: "no players found in your team!" });
  // } else {
  res.status(200).json({ status: 200, data: teamFromMongo });
  // }
  client.close();
  console.log("disconnected!");
};

const handleUpdate = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();
  console.log("connected");

  const db = client.db("Fantasy-team");
};

module.exports = { handlePost, getTeam, handleUpdate, handleDelete };
