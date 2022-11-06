import { getSession } from "next-auth/react";
import User from "../../../schema/userSchema";
const protect = async (req, res) => {
  const { user } = await getSession({ req });
  if (!user) {
    return res
      .status(400)
      .json({ error: "Please Login to perform the operation" });
  }
  try {
    const admin = await User.findOne({ email: user.email });
    return admin;
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

export default protect;

export const config = {
  api: {
    externalResolver: true,
  },
};
