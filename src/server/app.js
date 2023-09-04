import express from "express"
import router from "./router/index.js";
import ejs from "ejs"

const app = express()

app.set("view engine", "ejs")
app.set("views", 'build/views')

app.get('/', (_req, res) => {
    res.render('index', {dynamicValue: "hello"})
})

//app.get('*', router)

export default app;
