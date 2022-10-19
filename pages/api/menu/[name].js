import Menu from "../../../schema/MenuSchema";
import connectDB from "../../../utils/connectDB";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  switch (req.method) {
    case "GET":
      getMenu(req, res);
      break;
    case "PATCH":
      editMenu(req, res);
      break;
  }
};

const getMenu = async (req, res) => {
  try {
    const { name } = req.query;
    const menu = await Menu.findOne({ name });
    if (menu) {
      res.status(200).json(menu);
    } else {
      throw new Error("No Menu Found");
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const editMenu = async (req, res) => {
  try {
    const { name } = req.query;

    const getMenu = await Menu.findOne({ name });
    const { price, description, category } = req.body;

    getMenu.name = req.body.name;
    getMenu.price = price;
    getMenu.category = category;
    getMenu.description = description;

    await getMenu.save();
    console.log("saved");
    res.status(200).json({
      status: "Menu Successfully Edited",
    });
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
