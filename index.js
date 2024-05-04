const express = require("express");
const app = express();
const kitraRoute = require("./routes/kitra.route");

app.use(express.json());

app.use("/", kitraRoute);

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
