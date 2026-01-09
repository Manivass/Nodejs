const { MongoClient } = require("mongodb");

const url = "mongodb+srv://manivass:mani1012@namastenode.omxnchr.mongodb.net/";

const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log(" Server Successfully Connected ");
  const db = client.db("HelloWorld");
  const collection = db.collection("user");

  const data1 = {
    firstName: "Durai",
    lastName: "VIgnesh",
    city: "Salem",
    phoneNo: 9876543210,
    country: "India",
  };
  const data2 = {
    firstName: "Thiru",
    lastName: "Kumaran",
    city: "Salem",
    phoneNo: 9876543210,
    country: "India",
  };
  const data3 = {
    firstName: "Thillai",
    lastName: "Vinayagam",
    city: "Salem",
    phoneNo: 9876543210,
    country: "India",
  };

  const insertData1 = await collection.insertOne(data1);

  // const readData = await collection.find({}).toArray();
  // console.log(readData);

  // const updateData = await collection.updateOne(
  //   { firstName: "Thillai" },
  //   { $set: { firstName: "Swetha" } }
  // );

 const deleteresult = await collection.deleteMany({}) ;
// const deleteResult = await collection.deleteOne({firstName : "Durai"}) ;
// console.log(deleteResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
