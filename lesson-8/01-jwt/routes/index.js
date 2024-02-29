import express from "express";

import authRoutes from "./auth.js";
import bookRoutes from "./books.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/books", auth, bookRoutes);

export default router;
