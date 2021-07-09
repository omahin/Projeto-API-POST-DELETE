const express = require("express");
const app = express();

const index = require("./routes/index");
const tasks = require("./routes/contatinhosRoutes");

app.use(express.json());
app.use("/", index);
app.use("/contatinhos", tasks);

module.exports = app