
import express from "express";
import { getXsollaData } from "../controllers/xsollaController.js";

const router = express.Router();

// Route for xsolla data
router.get("/", getXsollaData);

export default router;
