const categories = require("../models/Categories");

const GetAllCategories = async (req, res) => {
  try {
    const cate = await categories.GetAllCategories();
    res.json(cate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const CreateCategories = async (req, res) => {
  try {
    const { name, description, code, status } = req.body;
    const cate = categories.CreateCategories(name, description, code, status);
    res.json({ message: "Create success!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { GetAllCategories, CreateCategories };
