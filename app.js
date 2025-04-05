const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/movie", require("./v1/routes/movieRoutes"));

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
