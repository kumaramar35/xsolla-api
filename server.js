
import express from "express";
import xsollaRoutes from "./routes/xsollaRoutes.js";
import menuRoutes from './routes/menuRoutes.js'
import eventsRoutes from './routes/eventsRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/xsolla", xsollaRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/events", eventsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
