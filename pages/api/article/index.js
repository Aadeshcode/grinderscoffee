import Article from "../../../schema/articleSchema";
import connectDB from "../../../utils/connectDB";
import slugify from "slugify";
import protect from "../auth/protect";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  switch (req.method) {
    case "GET":
      getArticles(req, res);
      break;
    case "POST":
      createArticle(req, res);
      break;
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({
      createdAt: -1,
    });
    if (articles.length) {
      res.status(200).json(articles);
    } else {
      throw new Error("No Article Found");
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const createArticle = async (req, res) => {
  const { isAdmin } = await protect(req, res);
  if (!isAdmin) {
    throw new Error("No Article Found");
  }
  try {
    const { article, topic, category } = req.body;
    let thumbnail;
    for (let i = 0; i < article.length; i++) {
      const element = article[i];
      if (element.type === "image") {
        thumbnail = element.url;
        break;
      }
    }
    const createArticle = new Article({
      category,
      slug: slugify(topic) + "-" + new Date().valueOf().toString().slice(7),
      article,
      topic,
      thumbnail,
    });
    const createdArticle = await createArticle.save();
    res.status(200).json({
      status: "Article Successfully Created",
      slug: createdArticle.slug,
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
