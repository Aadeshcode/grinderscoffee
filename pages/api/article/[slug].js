import Article from "../../../schema/articleSchema";
import connectDB from "../../../utils/connectDB";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  switch (req.method) {
    case "GET":
      getArticle(req, res);
      break;
    case "PATCH":
      editArticle(req, res);
      break;
    case "DELETE":
      deleteArticle(req, res);
      break;
  }
};

const getArticle = async (req, res) => {
  try {
    const { slug } = req.query;
    const article = await Article.aggregate([
      {
        $match: {
          slug,
        },
      },
      {
        $lookup: {
          from: Article.collection.name,
          pipeline: [
            {
              $sort: {
                createdAt: -1,
              },
            },
            {
              $limit: 2,
            },
            {
              $project: {
                topic: 1,
                slug: 1,
                category: 1,
                thumbnail: 1,
                createdAt: 1,
              },
            },
          ],
          as: "recent",
        },
      },
    ]);

    if (article.length) {
      res.status(200).json(article[0]);
    } else {
      res.status(200).json({ message: "No Article Found" });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const editArticle = async (req, res) => {
  try {
    const { name } = await protect(req, res);
    if (name) {
      const { slug } = req.query;
      const getArticle = await Article.findOne({ slug: slug });
      const {
        article,
        topic,
        category,
        tags,
        showData,
        subCategory,
        thumbnail,
      } = req.body;
      console.log(subCategory);
      const slugToBeAdded =
        getArticle.title === topic
          ? getArticle.slug
          : slugify(topic) + "-" + new Date().valueOf().toString().slice(7);
      getArticle.article = article;
      getArticle.title = topic;
      getArticle.thumbnail = thumbnail;
      getArticle.category = category;
      getArticle.subCategory = subCategory;
      getArticle.tags = tags;
      getArticle.showData = showData;
      getArticle.slug = slugToBeAdded;

      const editedArticle = await getArticle.save();
      res.status(200).json({
        status: "Article Successfully Edited",
        slug: editedArticle.slug,
      });
    } else {
      res.status(401).json({ message: "User Not Logged In" });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
const deleteArticle = async (req, res) => {
  try {
    const { email } = await protect(req, res);
    if (!email) {
      throw new Error("Not Authorised");
    }
    const { slug } = req.query;
    const getArticle = await Article.findOne({ slug });
    if (!getArticle) {
      throw new Error("Article Not Found");
    }
    if (email !== email) {
      throw new Error("Not Authorised");
    }

    await getArticle.remove();

    res.status(200).json({
      status: "Article Successfully Deleted",
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
