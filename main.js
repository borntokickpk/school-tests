const express = require("express");
require("dotenv").config();

const app = express();

app.all("*", (_req, res) => res.status(404).json({ message: "Page not found" }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`listening on port: ${PORT}`));
