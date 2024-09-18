const express = require("express");
require("dotenv").config();
const directorsRoutes = require("./routes/directors");
const actorsRoutes = require("./routes/actors");
const genresRoutes = require("./routes/genres");
const moviesRoutes = require("./routes/movies");
const ratingsRoutes = require("./routes/ratings");

const app = express();

app.use(express.json());

app.use("/directors", directorsRoutes);
app.use("/actors", actorsRoutes);
app.use("/genres", genresRoutes);
app.use("/movies", moviesRoutes);
app.use("/ratings", ratingsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
