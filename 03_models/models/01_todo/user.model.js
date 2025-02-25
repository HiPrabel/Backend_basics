import mongoose from 'mongoose'

// timestamps & array in password for required

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    }
  }, {timestamps: true}
)

export const User = mongoose.model("User", userSchema)
