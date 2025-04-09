const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static file
app.use(express.static(path.join(__dirname, "dist")));

app.get("/api/message", (req, res) => {
  res.json({message: "Hello from the backend"});
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
