const express = require("express");

const PORT = process.env.PORT || 4002;

const app = express();

app.get("/test", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
