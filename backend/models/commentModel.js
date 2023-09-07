const mongoose = require('mongoose');




const commentSchema = new mongoose.Schema({
    userId: { type: Schema.Type.ObjectId, ref: "Users" },
    postId: { type: Schema.Type.ObjectId, ref: "Users" },
    comment: { type: Schema.Type.ObjectId, ref: "Users" },
    from: { type: String, required: true},
    replies:[{
        rid: { type: Schema.Type.ObjectId, ref: "Users" },
        userId: { type: Schema.Type.ObjectId, ref: "Users" },
        from: { type: String },
        replyAt: { type: String },
        comment: { type: String },
        created_At: { type: Date, default: Date.now()},
        updated_At: { type: Date, default: Date.now()},
        likes: [{ type: String}]
    }],
    likes: [{ type: String}],
}, 
{ timestamps}

)


const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments