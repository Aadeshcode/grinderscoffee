import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String },
  isAdmin: { type: Boolean, default: false },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
