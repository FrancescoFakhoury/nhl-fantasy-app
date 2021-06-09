const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

  if (teamFromMongo.length === 0) {
    res
      .status(404)
      .json({ status: 404, message: "no players found in your team!" });
  } else {
    res.status(200).json({ status: 200, data: teamFromMongo });
  }
  client.close();
  console.log("disconnected!");
};

const handleUpdate = async (req, res) => {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();
    console.log("connected");
  
    const db = client.db("Fantasy-team");
}

// const deletePlayer = async (req, res) => {
//   const client = await MongoClient(MONGO_URI, options);
//   const { id } = req.params;

//   await client.connect();
//   console.log("connected");

//   const db = client.db("Fantasy-team");

//   const array = await db.collection("Teams").remove({})
  
//   array.
//   }

module.exports = { handlePost, getTeam, handleUpdate };
