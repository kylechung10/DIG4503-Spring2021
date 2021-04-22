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
    // Select the lab11 database
    this.database = this.connection.db("lab11");
    // Select the books collection
    this.collection = this.database.collection("books");
  }

  // createOne()
  async createOne(newISBN, newTitle, newAuthor, newDesc) {
    if (this.collection != null) {
      let newBook = {
        ISBN: newISBN,
        title: newTitle,
        author: newAuthor,
        description: newDesc,
      };
      // Inserts a new document using the ISBN, author, title, and description.
      await this.collection.insertOne(newBook);
      // Responds with created document
      return newBook;
    }
  }

  // readOne()
  async readOne(isbnSearch) {
    if (this.collection != null) {
      let searchBook = { book: "not found" };
      let results = await this.collection.findOne({ ISBN: isbnSearch });
      if (results != null) {
        searchBook = results;
      }
      return searchBook;
    }
  }

  // readMany()
  async readMany(urlTitle, urlAuthor) {
    if (this.collection != null) {
      // Create new array
      let newArray = [];
      let multiSearch = this.collection.find({
        // Search for either the author or title
        $or: [
          // Only show the results for the results without defined or null in the opposite property
          { author: urlAuthor, title: { $ne: null } },
          { title: urlTitle, author: { $ne: null } },
        ],
      });
      // For each result found push to the new array
      await multiSearch.forEach((douments) => {
        newArray.push(douments);
      });
      // Formatting
      return { books: newArray };
    }
  }

  // updateOne()
  async updateOne(updateURL, updateTitle, updateAuthor, updateDesc) {
    if (this.collection != null) {
      let completeUpdate = { book: "Could not be found or updated" };
      let newUpdate = {};
      // Check to see if properties are null then add to the new update parameter
      // To prevent rewriting null on properties
      if (updateTitle) newUpdate.title = updateTitle;
      if (updateAuthor) newUpdate.author = updateAuthor;
      if (updateDesc) newUpdate.description = updateDesc;
      let updatedDoc = await this.collection.updateOne(
        // Query based on the given search parameter
        { ISBN: updateURL },
        {
          // Update the document data with new parameters if they are not null
          $set: newUpdate,
        }
      );
      // If the update was completed return only the parameters updated
      if (updatedDoc != null) {
        completeUpdate = newUpdate;
      }
      return completeUpdate;
    }
  }

  // deleteOne()
  async deleteOne(bookDelete) {
    if (this.collection != null) {
      let confirmDelete = { books: 0 };
      let results = await this.collection.deleteOne({ ISBN: bookDelete });
      if (results != null) {
        // If the deletion was complete, count how many documnets were deleted
        confirmDelete = { books: results.deletedCount };
      }
      return confirmDelete;
    }
  }

  close() {
    if (this.connection != null) {
      this.connection.close();
    }
  }
}
