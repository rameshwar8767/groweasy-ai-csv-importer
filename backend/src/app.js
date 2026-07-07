import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GrowEasy Backend API is Running 🚀",
  });
});

// API Routes
app.use("/api", routes);


export default app;