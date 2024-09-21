"use server";

import mongoose, { Document, Model } from "mongoose";
const { Schema } = mongoose;

export interface IPost extends Document {
  creator: mongoose.Types.ObjectId;
  title: string;
  translitted_title: string;
  description?: string;
  status: "NEW" | "IN_PROGRESS" | "DONE" | "CLOSED";
  upvotes: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
}

// Define the schema for the Post document
const PostSchema = new Schema<IPost>({
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  translitted_title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["NEW", "IN_PROGRESS", "DONE", "CLOSED"],
    required: true,
  },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

// Create the Post model
const Post: Model<IPost> =
  mongoose.models?.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
