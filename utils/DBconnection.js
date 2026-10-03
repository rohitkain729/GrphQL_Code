import mongo from "mongodb";

async function getDB() {
  try {
    const url =
      "mongodb+srv://rohit729verma_db_user:rohit724455@cluster0.qxj0qhn.mongodb.net/";
    const mongoClient = mongo.MongoClient;
    const server = await mongoClient.connect(url);
    const db = server.db("nit");
   return db;
  } catch (err) {
    console.log(err);
    return err.message;
  }
}

export default getDB;
