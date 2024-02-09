import { app } from "./app.js";
import { connectDB } from "./configuration/database.js";
// define port with default port 5000
const PORT = process.env.PORT || 5000



  // Call the connectDB function
  connectDB();
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
  });
