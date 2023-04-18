const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Sharvil:sharvilm143@cluster0.6e3jweq.mongodb.net/?retryWrites=true&w=majority";

// db.js

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connect: () =>
    client
      .connect()
      .then(() => {
        console.log("Connected to MongoDB Atlas");

        const collection = client.db("test").collection("users");

        // Retrieve all documents from the users collection
        collection
          .find()
          .toArray()
          .then((users) => console.log(users))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err)),
};
