const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//for security
const helmet = require("helmet");
const connectDb = require("./dbConfig/dbConn");

dotenv.config();
const PORT = process.env.PORT || 9090;

connectDb()
const app = express();

// Middlewae config
app.use(helmet);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
