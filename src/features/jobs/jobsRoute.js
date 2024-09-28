import express from 'express';
import * as jobController from "./jobController.js";
import {authMiddleware} from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", authMiddleware, jobController.dashboard);

export default router;