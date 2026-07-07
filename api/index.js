require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

// Allow all CORS since frontend and backend are on the same Vercel domain
app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "NutriTrack Backend API is working!" });
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/note", require("./routes/note"));
app.use("/api/news", require("./routes/news"));

// Export the app for Vercel serverless function
module.exports = app;

// Only listen locally if not on Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`NutriTrack app listening on port http://localhost:${port}`);
  });
}
