const mongoose = require("mongoose");

// define the post schema
const postSchema = new momgoose.Schema({
    userId: {type: Schema.Type.ObjectId, ref: "Users"},
    description: { type: String},
    image: { type: String},
    likes: [{type: String}],
    comments: [{ type: Schema.Type.ObjectId, ref: "Users"}]
},
    {timestamps: true}
);

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
