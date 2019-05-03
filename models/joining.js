const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const joiningSchema = new Schema({
  mtclass: {
    type: Schema.Types.ObjectId,
    ref: "Class"
  },
  userId: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Joining", joiningSchema);
