const mongoose = require('mongoose');


const emailVerificationSchema = new mongoose.Schema({
    userId: String,
    token: String,
    createAt: Date,
    expireAt: Date,
})


const EmailVerification = mongoose.model("EmailVefication", emailVerificationSchema);

module.exports = EmailVerification;