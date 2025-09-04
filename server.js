
import express from "express";
import xsollaRoutes from "./routes/xsollaRoutes.js";
import menuRoutes from './routes/menuRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/xsolla", xsollaRoutes);
app.use("/api/menu", menuRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
