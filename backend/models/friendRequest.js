const mongoose = require("mongoose");

// schema

const requestSchema = new mongoose.Schema(
  {
    requestTo: { type: Schema.Type.ObjectId, ref: "Users" },
    requestFrom: { type: Schema.Type.ObjectId, ref: "Users" },
    requestStatus: { type: String, default: "Pending" },
  },
  { timestamps }
);

const FriendRequest = mongoose.model("FriendRequest", requestSchema);

module.exports = FriendRequest
