import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
  {
    name: { type: String, required: true, lunique: true },
    description: { type: String, required: true },
    category: { type: String, required: true, default: "coffee" },
    price: { type: Number, required: true },
    // image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.models.Menu || mongoose.model("Menu", menuSchema);

export default Menu;
