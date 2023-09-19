const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
require("dotenv").config();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
require("./utils/db")();
app.use("/api", require("./routes/auth"));
app.listen(8000, () => console.log("server listening on port 8000"));
