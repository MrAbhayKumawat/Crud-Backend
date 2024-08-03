import mongoose from "mongoose";

const ConnectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default ConnectToDb;
