const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST, PORT = 4000 } = process.env;

mongoose.connect(DB_HOST).then(() => {
  console.log("Database connect");
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
});
