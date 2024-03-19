const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const db = process.env.DATABASE;
mongoose
  .connect(db, {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("database Connected successfully"));

app.listen(3000, () => {
  console.log("Welcome to node test app");
});
