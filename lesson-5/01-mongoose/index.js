import mongoose from "mongoose";

const DB_URI = `mongodb+srv://student:gKywxbp8Blxavfmw@cluster0.njphl7j.mongodb.net/bookshelf?retryWrites=true&w=majority`;

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection success");
    process.exit(0);
  })
  .catch((error) => console.error("Database connection error", error));
