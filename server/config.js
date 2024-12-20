import mongoose from 'mongoose';

// Database connection function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://USERNAME:PASS@CLUSTERNAME.9rpyb.mongodb.net/office-attendance?retryWrites=true&w=majority&appName=CLUSTERNAME',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;