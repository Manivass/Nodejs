const { MongoClient } = require("mongodb");
const url = "mongodb+srv://manivass:mani1012@namastenode.omxnchr.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Successfully Connected");
  const db = client.db(dbName);
  const collection = db.collection("user");
  return ".done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close);
