const mongoose = require('mongoose')


//Define the userSchema

const userSchema = new mongoose.Schema(
    {
       firstName: {
        type: String,
        required: [true, "first Name is required"]
       },
       lastName: {
        type: String,
        required: [true, "lasst Name is required"]
       },
       email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
       },
       password: {
        type: String,
        require: [true, "Password is required"],
        nimLength: [6, "Password length should be at least 6 character "]
       },
       location: {type: String},
       profileUrl: {type: String},
       profrssion: {type: String},
       friends: [{type: Schema.Type.ObjectId, ref: "Users"}],
       views: [{type: String}],
       verified: {type: Boolean, default: false}
    },
    {timestamps: true}
)

const Users = mongoose.model("Users", userSchema);
module.exprts = Users;