import express from "express";

import authRoutes from "./auth.js";
import bookRoutes from "./books.js";
import userRoutes from "./users.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/books", auth, bookRoutes);
router.use("/users", auth, userRoutes);

export default router;
