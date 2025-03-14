import mongoose from 'mongoose'
// reference & direct array type declaration in sub todos
const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  subTodo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubTodo',
    },
  ],
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)