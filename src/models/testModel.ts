import mongoose, { Document, Schema } from "mongoose";

export interface ITest extends Document {
  type: string;
  question: string;
  solution?: string;
}

const TestSchema: Schema = new Schema(
  {
    type: { type: String, required: true },
    question: { type: String, required: true },
    solution: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model<ITest>("Test", TestSchema);
