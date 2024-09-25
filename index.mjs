import app from './src/app.mjs';

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
