const express = require("express");
const path = require("path");
const cors = require("cors");
const { db } = require("./src/config");
const router = require("./src/routes");
const app = express();
const port = 3010;

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api", router);

app.listen(port, async () => {
   try {
      await db.authenticate();
      console.log(`Example app listening on port ${port}!`);
   } catch (error) {
      console.log(error.message);
   }
});
