import express from "express";
import dotenv from "dotenv";
import {notFound} from "./middlewares/notFound.middleware.mjs";
import {errorMiddlewares} from "./middlewares/error.middleware.mjs";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("test");
});

app.use(notFound);
app.use(errorMiddlewares);

export default app;