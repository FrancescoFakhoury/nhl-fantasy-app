const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;
const DB_NAME = "Fantasy-team";
let db;

const initMongoClient = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGO_URI, options);

  client.connect((err) => {
    if (err) {
      throw err;
    }
    db = client.db(DB_NAME);
  });
};

module.exports = { initMongoClient, db: () => db };
