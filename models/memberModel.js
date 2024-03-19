const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    plan: {
      type: String,
      required: [true, "You must have a plan"],
      enum: {
        values: ["lifting", "cardio", "calisthanics", "gymnastics", "jumba"],
        message:
          "Plan should either be lifting, cardio, calisthanics, gymnastics, jumba",
      },
    },
  },
  {
    toJSON: true,
    toObject: true,
  }
);

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
