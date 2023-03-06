require("dotenv/config");
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const fileUploadRoutes = require("./src/routes/fileUpload.routes");
const dbConfig = require("./src/config/dbConfig");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Working Home Page");
});
app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));
app.use("/api", fileUploadRoutes.routes);

dbConfig(process.env.MONGO_URL);
app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
