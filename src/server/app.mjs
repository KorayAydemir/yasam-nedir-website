import express from "express"
import router from "./router/index.mjs"; 

import ejs from 'ejs';

const app = express()

app.engine('ejs', ejs.__express)
app.set("view engine", "ejs")
app.set("views", 'build/views')

app.use('/build', express.static('build') );

app.get('*', router)

export default app;
