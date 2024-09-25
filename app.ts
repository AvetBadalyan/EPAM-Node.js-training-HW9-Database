import express from "express";
import dotenv from "dotenv";
import directorsRoutes from "./routes/directors";
import actorsRoutes from "./routes/actors";
import genresRoutes from "./routes/genres";
import moviesRoutes from "./routes/movies";
import ratingsRoutes from "./routes/ratings";

dotenv.config();

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
