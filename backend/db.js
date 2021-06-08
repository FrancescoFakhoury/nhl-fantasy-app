const { MongoClient } = require("mongodb");

const MONGO_URI =
  "mongodb+srv://dbUser:deniro08@cluster0.vupqp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
