import express from "express"
import compression from "compression"
const router = require("./router")

const app = express()
app.use(compression())
app.use(router)

app.listen(3000);