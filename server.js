import { app } from "./app.js";
import mongoose from "mongoose";
// define port with default port 5000
const PORT = process.env.PORT || 5000


// Connect to the database
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "employee_crm",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Employee CRM Database Connected");
    } catch (error) {
      console.error(error.message);
      process.exit(1); // Exit process with failure
    }
  };
  
  // Call the connectDB function
  connectDB();
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
  });
