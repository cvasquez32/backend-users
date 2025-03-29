const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/users", require("./v1/routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
