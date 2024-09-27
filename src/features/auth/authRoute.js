import express from 'express';

const router = express.Router();

import * as authController from './authController.js';
import validate from "../../middlewares/validationMiddleware.js";
import {loginSchema, registerSchema} from "./authSchemas.js";

router.post("/login", validate(loginSchema), authController.login);
router.post("/register", validate(registerSchema), authController.register);

export default router;