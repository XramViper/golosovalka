import mongoose, { Document, Model, Schema } from "mongoose";

interface IBoard extends Document {
  creator: mongoose.Types.ObjectId;
  title: string;
  translited_title: string;
  posts: mongoose.Types.ObjectId[];
}

const BoardSchema = new Schema<IBoard>({
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  translited_title: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const Board: Model<IBoard> =
  mongoose.models?.Board || mongoose.model<IBoard>("Board", BoardSchema);

export default Board;
