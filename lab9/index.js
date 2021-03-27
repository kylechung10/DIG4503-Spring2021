import MongoClient from "mongodb";

const URL =
  //Using the connection username and password, connect to the MongoDB server.
  "mongodb+srv://KyleChung:NXImKPJpkYVCtOoz@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((connection) => {
    //Select the "sample_airbnb" database.
    let database = connection.db("sample_airbnb");

    //Select the  "listingsAndReviews" collection.
    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({
      //With greater than or equal to 5 beds
      beds: { $gte: 5 },
      //With a price less than or equal to 200
      price: { $lte: 200 },
      //With a review score rating greater than or equal to 99
      "review_scores.review_scores_rating": { $gte: 99 },
    });

    cursor.forEach(
      (document) => {
        //Show the results of the search on the console.
        console.log(document);
      },
      () => {
        connection.close();
      }
    );
  })
  .catch((error) => {
    console.log("Error " + error);
  });
