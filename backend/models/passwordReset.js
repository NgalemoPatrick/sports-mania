const mongoose = require("mongoose");

//schema

const passwordResetSchema = new mongoose.Schema({
    userId: { type: String, unique: true},
    email: { type: String, unique: true},
    token: String,
    createdAt: Date,
    expiredAt: Date
})

const PasswordReset = mongoose.model("PasswordReset", passwordResetSchema);

module.exports = PasswordReset;