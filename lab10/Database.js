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
      //Pass data and create document
      return await this.collection.insertOne(newData);
    }
  }

  async readOne(person) {
    if (this.collection != null) {
      return await this.collection.findOne({
        firstName: person,
      });
      //   let search = await this.collection.findOne({ firstName: person });
      //   if (search != null) {
      //     return search;
      //   } else {
      //     return { person: "not found" };
      //   }
    }
  }

  close() {
    if (this.connection != null) {
      this.connection.close();
    }
  }
}
