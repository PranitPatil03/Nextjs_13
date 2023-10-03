import mongoose from "mongoose";

export async function connectToMongoDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connected");
  } catch (error) {
    console.error(error);
    console.log("Something went wrong");
  }
}
