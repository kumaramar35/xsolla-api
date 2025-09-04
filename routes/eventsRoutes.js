import express from "express";
import { getUpcomingEvents } from "../controllers/eventsController.js";

const router = express.Router();

// Route for upcoming events data
router.get("/", getUpcomingEvents);

export default router;