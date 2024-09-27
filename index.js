import app from './src/app.js';
import dotenv from 'dotenv';
import Logger from "./src/utils/logger.js";

dotenv.config();

const PORT = process.env.PORT || 10000;


// Start the server on the specified port.
app.listen(PORT, () => Logger.log(`SERVER IS LISTENING ON http://localhost:${PORT}`, "ready"));