import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filenamee = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filenamee);

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static file
app.use(express.static(path.resolve(__dirname, "dist")));

app.get("/api/message", (req, res) => {
  res.json({message: "Hello from the backend"});
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
