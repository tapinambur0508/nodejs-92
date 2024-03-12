import express from "express";

import UserController from "../controllers/user.js";

import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/avatar", UserController.getAvatar);
router.patch("/avatar", upload.single("avatar"), UserController.uploadAvatar);

export default router;
