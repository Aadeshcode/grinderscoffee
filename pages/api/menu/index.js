import Menu from "../../../schema/MenuSchema";
import connectDB from "../../../utils/connectDB";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  switch (req.method) {
    case "POST":
      createMenu(req, res);
      break;
    case "GET":
      getMenu(req, res);
      break;
    case "DELETE":
      deleteMenu(req, res);
      break;
  }
};
const createMenu = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const exists = await Menu.find({ name });
    if (exists.length) {
      throw new Error("Menu Already Exists");
    }
    const menuCreate = new Menu({
      name,
      description,
      price,
      category,
    });
    await menuCreate.save();
    res.status(200).json({ status: "Menu Successfully Created" });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getMenu = async (req, res) => {
  try {
    const allMenu = await Menu.find();
    if (allMenu.length) {
      res.status(200).json(allMenu);
    } else {
      res.status(200).json(allMenu);
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const deleteMenu = async (req, res) => {
  try {
    const { name } = req.query;
    const menu = await Menu.findOne({ name });
    if (menu) {
      await menu.remove();
      res.status(200).json({ message: "deleted" });
    } else {
      throw new Error("No Menu Found");
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const config = {
  api: {
    externalResolver: true,
  },
};
