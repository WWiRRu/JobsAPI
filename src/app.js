import "express-async-errors";
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import notFound from "./middlewares/notFoundMiddleware.js";
import {errorMiddlewares} from "./middlewares/errorMiddleware.js";
import authRoute from "./features/auth/authRoute.js";
import jobsRoute from "./features/jobs/jobsRoute.js";

// Middleware to parse JSON request bodies
app.use(express.json());
//Middle to parse cookies.
app.use(cookieParser(process.env.COOKIE_SECRET));

// Middleware to parse cookies.
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/jobs', jobsRoute)

app.use(notFound);
app.use(errorMiddlewares);

export default app;