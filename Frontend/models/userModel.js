import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    forgotPasswordToken: { type: String, date: Date },
    verificationToken: { type: String, date: Date },
    },
    { timestamps: true }
);

const User = mongoose.model.User("User", userSchema);
export default User;