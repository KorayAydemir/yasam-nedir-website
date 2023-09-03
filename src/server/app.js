import path from "path"
import express from "express"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

const rootDir = express.static(path.join(__dirname, "../"))

const indexPath = path.join(__dirname, "../index.html")

app.use(rootDir)

app.get('/', (req, res) => {
    res.sendFile(indexPath)
})

export default app;
