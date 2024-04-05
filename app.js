const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const memberRouter = require("./routes/memberRoutes");
const userRouter = require("./routes/userRoutes");

// global middleware

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  console.log("middleware successfull");
  next();
});

// app.use("/", (req, res, next) => {
//   res.status(200).json({
//     status: "success",
//     message: "Welcome to node app",
//   });
// });

app.use("/api/members", memberRouter);
app.use("/api/users", userRouter);

module.exports = app;
