const db = require("../config/connection");

const GetAllCategories = async () => {
  const [rows] = await db.query("SELECT * FROM categories");
  //   const [rows] = await db.query("");
  return rows;
};

const CreateCategories = async (name, description, code, status) => {
  const [result] = await db.query(
    "INSERT INTO categories (name, description, code, status) VALUES (?, ?, ?, ?)",
    [name, description, code, status]
  );
  return result;
};

module.exports = { GetAllCategories, CreateCategories };
 