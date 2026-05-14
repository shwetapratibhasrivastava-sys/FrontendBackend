import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);  //to run mongo db we need mongoose n .connect is a function MONGO_URI is a data with what we are connected
    console.log("MongoDb Connected....");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default connectDB;
