import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
import connectDB from "../../../utils/connectDB";
import User from "../../../schema/userSchema";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }
    connectDB();

    const checkExisting = await User.findOne({ email });

    if (checkExisting) {
      res.status(422).json({ message: "User already exists" });
      return;
    }
    //Hash password
    const status = new User({
      email,
      password: await hash(password, 12),
    });
    const createdStatus = await status.save();

    res.status(201).json({ message: "User created", createdStatus });
  } else {
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;
