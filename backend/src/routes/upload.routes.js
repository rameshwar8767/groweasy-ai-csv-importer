import { Router } from "express";
import upload from "../config/multer.js";
import { uploadCSV } from "../controllers/upload.controller.js";

const router = Router();

router.post("/", upload.single("file"), uploadCSV);

export default router;