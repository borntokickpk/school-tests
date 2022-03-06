const express = require("express");
require("dotenv").config();
const strings = require("./constants/strings");

const app = express();

app.all("*", (_req, res) => res.status(404).json({ message: strings.MESSAGES.PAGE_NOT_FOUND }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`listening on port: ${PORT}`));
