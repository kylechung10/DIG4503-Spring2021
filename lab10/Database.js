import MongoClient from "mongodb";

const url =
  "mongodb+srv://KyleChung:NXImKPJpkYVCtOoz@cluster0.yuzwq.mongodb.net";

export default class Database {
  constructor() {
    // Setup a default value for connection
    this.connection = null;
    // Setup a default value for database
    this.database = null;
    // Setup a default value for collection
    this.collection = null;
    //URL using our login
  }

  async connect() {
    // Wait for the connect() method to finish.
    this.connection = await MongoClient.connect(url, {
      useUnifiedTopology: true,
    });
    // Select the lab10 database
    this.database = this.connection.db("lab10");
    // Select the people collection
    this.collection = this.database.collection("people");
  }

  async createOne(fName, lName, fColor) {
    if (this.collection != null) {
      let newData = {
        firstName: fName,
        lastName: lName,
        favoriteColor: fColor,
      };
      //Pass data into the people database
      await this.collection.insertOne(newData);
      //Return object with the properties used
      return newData;
    }
  }

  async readOne(person) {
    if (this.collection != null) {
      //Set variable to {search: "not found"} if cannot find the paramter in database
      let searchData = { search: "not found" };
      let results = await this.collection.findOne({
        firstName: person,
      });
      //If the search data returned then return the values from the object found
      if (results != null) {
        searchData = results;
      }
      //Return the data from the function
      return searchData;
    }
  }

  close() {
    if (this.connection != null) {
      this.connection.close();
    }
  }
}
