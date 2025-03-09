// require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const route = require("./routes/route");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use("/api/categories", route);
// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
