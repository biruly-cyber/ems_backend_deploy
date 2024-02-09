import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "employee_crm",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Employee CRM Database Connected");
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};
