import mongoose from "mongoose";

export const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "types",
  },
  types: {
    type: String,
    enum: ["Product", "Category"],
  },
})
  .pre("save", (next) => {
    console.log("New Like coming in");
    next();
  })
  .post("save", (doc) => {
    console.log("Like is saved");
    console.log(doc);
  })
  .pre("find", (next) => {
    console.log("Retriving likes");
    next();
  })
  .post("find", (docs) => {
    console.log("Find is completed");
    console.log(docs);
  });
  
//mongodb+srv://19amartyasen:<password>@cluster0.skjxmqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0