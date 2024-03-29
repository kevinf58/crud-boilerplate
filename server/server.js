const express = require("express");
const routes = require("./routes/routes");
const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/data", routes);

app.listen(port, () => {
  console.log(`Server running on port http://www.localhost:${port}/api/data`);
});
