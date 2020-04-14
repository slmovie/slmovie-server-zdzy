import express from "express"
import compression from "compression"
import path from "path"
const router = require("./router")
const app = express()

app.all("*", function (req, res, next) {
  res.set({
    "Access-Control-Allow-origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "Access-Control-Allow-Methods": "GET"
  });
  next();
});

app.use(compression())
app.use(express.static("web/build"));
app.use(router)
app.use("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../web/index.html"));
});

app.listen(3010);