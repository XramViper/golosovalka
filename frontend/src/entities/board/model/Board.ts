import mongoose from "mongoose";
const { Schema } = mongoose;

const BoardSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const Board = mongoose.models?.Board || mongoose.model("Board", BoardSchema);

export default Board;
