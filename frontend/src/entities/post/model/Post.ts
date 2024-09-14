"use server";

import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["open", "in progress", "closed"],
    required: true,
  },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.models?.Post || mongoose.model("Post", PostSchema);

export default Post;
